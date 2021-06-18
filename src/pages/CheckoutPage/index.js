import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { CheckoutProductItem } from './CheckoutProductItem';
import { Header, RedirectNotice } from '../../components';
import * as S from './style.js';
import { ROUTE } from '../../constants';
import { useCartProduct, useCartDispatch, useRequest } from '../../hooks';

export const CheckoutPage = () => {
  const [isCheckoutFailed, setIsCheckoutFailed] = useState(false);
  const { selectedProducts, totalPriceAsKRW } = useCartProduct();
  const { getProducts } = useCartDispatch();
  const { orderProducts } = useRequest();
  const history = useHistory();

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  const onClickCheckoutButton = async () => {
    try {
      await orderProducts(selectedProducts);
      getProducts();
      history.push(ROUTE.ORDER_LIST);
    } catch (e) {
      setIsCheckoutFailed(() => true);
    }
  };

  return (
    <S.Page>
      <Header>주문/결제</Header>
      <S.Main>
        {isCheckoutFailed ? (
          <RedirectNotice
            interjection="앗..."
            notice={`결제에 실패하였습니다... 문제가 지속되면 관리자에게 문의부탁드려요...`}
            buttonText="장바구니로 돌아가기"
            redirectRoute={ROUTE.CART}
          />
        ) : (
          <>
            <S.ListSection>
              <S.ListLabel>주문 상품 ({selectedProducts.length}건)</S.ListLabel>
              <S.CheckoutProductList>
                {selectedProducts.map((product) => (
                  <CheckoutProductItem key={product.id} product={product} />
                ))}
              </S.CheckoutProductList>
            </S.ListSection>
            <S.CheckoutSection>
              <S.StickyCheckoutBox
                title="결제예상금액"
                label="총 결제금액"
                price={totalPriceAsKRW}
                buttonText={`${totalPriceAsKRW} 결제하기`}
                onClickButton={onClickCheckoutButton}
              />
            </S.CheckoutSection>
          </>
        )}
      </S.Main>
    </S.Page>
  );
};
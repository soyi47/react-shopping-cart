import PropTypes from 'prop-types';
import { UnderlinedText } from '../../';
import * as S from './style.js';

export const CheckoutBox = (props) => {
  const { title, label, price, buttonText, buttonDisabled, onClickButton, ...rest } = props;

  return (
    <S.Container {...rest}>
      <S.Title>{title}</S.Title>
      <S.Content>
        <S.Bill>
          <UnderlinedText>{label}</UnderlinedText>
          <UnderlinedText>{price}</UnderlinedText>
        </S.Bill>
        <S.CheckoutButton disabled={buttonDisabled} onClick={onClickButton}>
          {buttonText}
        </S.CheckoutButton>
      </S.Content>
    </S.Container>
  );
};

CheckoutBox.propTypes = {
  title: PropTypes.string,
  label: PropTypes.string,
  price: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  buttonText: PropTypes.string,
  buttonDisabled: PropTypes.bool,
  onClickButton: PropTypes.func,
};
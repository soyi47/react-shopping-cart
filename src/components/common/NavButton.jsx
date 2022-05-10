import React from "react";
import styled from "styled-components";

const StyledNavButton = styled.button`
  padding: 0 4px 4px;

  background-color: transparent;
  border: none;
  color: ${(props) => props.theme.main};
  font-size: 1.5rem;
  text-align: center;
  cursor: pointer;

  :hover {
    border-bottom: 2px solid ${(props) => props.theme.main};
  }
`;

function NavButton({ children, ...rest }) {
  return <StyledNavButton {...rest}>{children}</StyledNavButton>;
}

export default NavButton;
import styled from "styled-components";

const StyledTextWrapper = styled.p`
  height: 8px;
  margin-top: 14px;
  padding: 0 2px;

  background-color: ${({ theme, highlightColor }) =>
    highlightColor || theme.color.primary_light};
`;

const StyledText = styled.span`
  position: relative;
  top: -200%;

  font-size: 20px;
  font-weight: bold;
  color: ${({ theme }) => theme.color.grey_darker};
`;

export { StyledTextWrapper, StyledText };
import styled from "styled-components";

export const HeaderStyled = styled.header`
  height: 60px;
  border-bottom: 3px solid ${(props) => props.colors.darkColors.main};
  background-color: ${(props) => props.colors.darkColors.background};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;

  .headerLogo {
    font-weight: 700;
    font-size: 20px;
    color: ${(props) => props.colors.darkColors.main};
    text-transform: uppercase;
  }
  .burgerMenu {
    fill: ${(props) => props.colors.darkColors.main};
    width: 40px;
    height: 40px;
  }
`;

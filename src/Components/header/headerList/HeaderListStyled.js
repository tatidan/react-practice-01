import styled from "styled-components";

export const HeaderListStyled = styled.ul`
  display: flex;
  list-style: none;

  .headerListItem:not(:last-child) {
    margin-right: 10px;
  }
  .headerListLink {
    color: ${props => props.colors.darkColors.main};
    cursor: pointer;
    text-transform: uppercase;
    text-decoration: none;
  }
`;

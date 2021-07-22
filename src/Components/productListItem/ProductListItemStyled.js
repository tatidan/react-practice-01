import styled from "styled-components";

export const ProductListItemStyled = styled.li`
  width: 100%;
  padding: 10px;
  height: 650px;


  .ProductListItemWrapper {
    width: 100%;
    height: 100%;
    border: 1px solid ${props => props.colors.darkColors.secondary};
    border-radius: 14px;
    padding: 20px;
    display: flex;
    flex-direction: column;
  }
  .ProductListItemTitle {
    text-align: center;
  }
  .ProductListItemImg {
    height: 200px;
    object-fit: contain;
    margin-top: 20px;
  }
  .ProductListItemSale {
    margin-top: 20px;
  }
  .ProductListItemDescription {
    flex-grow: 1;
    margin-top: 20px;
  }
  .ProductListItemName {
    font-weight: 700;
  }
  .ProductListItemPrice {
    margin-top: 20px;
  }
  .ProductListItemButtonsGroup {
    display: flex;
    align-items: center;
    width: 100%;
    margin-top: 20px;
  }
  .ProductListItemButtonsGroup button {
    background-color: ${props => props.colors.darkColors.main};
    width: 50%;
    border: none;
    height: 30px;
    /* padding: 10px; */
    color: ${props => props.colors.darkColors.buttonText};
    text-transform: uppercase;
    &:first-child {
      margin-right: 2px;
    }
    &:hover {
      background-color: ${props => props.colors.darkColors.active};
    }
  }
  .addToCartButton {
    border-radius: 14px 0 0 14px;
    align-self: center;
  }
  .detailsButton {
    border-radius: 0 14px 14px 0;
  }
  @media screen and (min-width: 768px) {
    width: 50%;
  }
  @media screen and (min-width: 1024px) {
    width: 25%;
  }
`;

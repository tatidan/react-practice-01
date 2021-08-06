import React from "react";
import colors from "../../styles/colors";
import { ProductListItemStyled } from "./ProductListItemStyled";

const ProductListItem = ({ product, addToCart, addPopular }) => {
  const { name, image, description, isSale, id, price } = product;

  const addNewProduct = () => {
    addToCart({ name, price, id, quantity: 1 });
  };

  const onHandleClick = () => {
    addPopular({ id, name });
  };

  return (
    <ProductListItemStyled colors={colors}>
      <div className="ProductListItemWrapper">
        <h3 className="ProductListItemTitle">{name}</h3>
        <img src={image} alt={name} className="ProductListItemImg" />
        <p className="ProductListItemSale">
          <span className="ProductListItemName">Sale:</span>{" "}
          {isSale ? "Действует акционная цена" : "В акции не участвует"}
        </p>
        <p className="ProductListItemDescription">
          <span className="ProductListItemName">Description: </span>
          {description}
        </p>
        <p className="ProductListItemPrice">
          <span className="ProductListItemName">Price:</span>{" "}
          <span>{price}</span>
        </p>
        <div className="ProductListItemButtonsGroup">
          <button
            type="button"
            className="addToCartButton"
            onClick={addNewProduct}
          >
            Add to Cart
          </button>
          <button
            type="button"
            className="detailsButton"
            onClick={onHandleClick}
          >
            Details
          </button>
        </div>
      </div>
    </ProductListItemStyled>
  );
};

export default ProductListItem;

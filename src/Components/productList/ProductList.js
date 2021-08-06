import React from "react";
import ProductListItem from "../productListItem/ProductListItem";
import { ProductListStyled } from "./ProductListStyled";

const ProductList = ({ products, addToCart, addPopular }) => {
  return (
    <>
      <ProductListStyled>
        {products.map((product) => (
          <ProductListItem
            product={product}
            key={product.id}
            addToCart={addToCart}
            addPopular={addPopular}
          />
        ))}
      </ProductListStyled>
    </>
  );
};

export default ProductList;

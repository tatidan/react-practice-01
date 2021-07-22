import React, { Component } from "react";
import data from "../../data";
import Cart from "../cart/Cart";
import ProductList from "../productList/ProductList";
import Section from "../section/Section";
// import { SectionStyled } from "../section/SectionStyled";
import { MainStyled } from "./MainStyled";

class Main extends Component {
  state = {
    products: [],
    cart: [],
    visited: []
  };

  addToCart = product => {
    if (this.state.cart.some(cartItem => cartItem.id === product.id)) {
      this.setState(prev => ({
        cart: prev.cart.map(cartItem =>
          cartItem.id === product.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        )
      }));
      return;
    }

    this.setState(prev => ({
      cart: [...prev.cart, product]
    }));
  };

  removeFromCart = id => {
    this.setState(prev => ({
      cart: prev.cart.filter(product => product.id !== id),
      visited: [...prev.visited, prev.cart.find(product => product.id === id)]
    }));
  };

  addItem = id => {
    this.setState(prev => ({
      cart: prev.cart.map(cartItem => (cartItem.id === id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem))
    }));
  };

  removeItem = id => {
    this.setState(prev => ({
      cart: prev.cart.map(cartItem =>
        cartItem.id === id && cartItem.quantity >= 1 ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
      )
    }));
  };

  render() {
    return (
      <MainStyled>
        <Section title="Cart">
          <Cart cart={this.state.cart} removeFromCart={this.removeFromCart} addItem={this.addItem} removeItem={ this.removeItem} />
        </Section>
        <Section title={"Мобильные телефоны"}>
          <ProductList products={data.phones} addToCart={this.addToCart} />
        </Section>
        <Section title={"Ноутбуки"}>
          <ProductList products={data.laptops} addToCart={this.addToCart} />
        </Section>
      </MainStyled>
    );
  }
}

export default Main;

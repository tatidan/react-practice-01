import React, { Component } from "react";
import data from "../../data";
import ProductForm from "../administration/admin/productForm/ProductForm";
import AuthForm from "../administration/auth/AuthForm";
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

  // async componentDidMount() {
  //   const response = await axios.get("https://_________/products.json");
  //   console.log(response);
  // const data = Object.keys(response.data).map(item => ({ ...response.data[item], id: item }));
  // console.log(data);
  // this.setState({ products: data });
  // }
  //и затем отрисовать полученные от бэкенда данные

  addNewProduct = (product) => {
    this.setState(prev => ({ products: [...prev.products, product] }));
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
        <Section title="Product form"><ProductForm addNewProduct={ this.addNewProduct} /></Section>
        
        <Section title="Authorization"><AuthForm/></Section>
      
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

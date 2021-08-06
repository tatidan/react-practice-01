import axios from "axios";
import React, { Component } from "react";
import { ProductFormStyled } from "./ProductFormStyled";

const categories = ["Phones", "Laptops"];

const initialState = {
  name: "",
  image: "",
  price: 0,
  description: "",
  category: categories[0],
  isSale: false,
};

class ProductForm extends Component {
  state = { ...initialState };

  onHandleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://shop-49287-default-rtdb.firebaseio.com/products.json",
        this.state
      );

      this.props.addNewProduct({ ...this.state, id: response.data.name });
    } catch (error) {
      console.log(error.response.data.error);

      //добавить уведомление о 404 пользователю
      //this.state.error && <p></p>
    }
  };
  // console.log(this.state);
  //   await axios
  //     .post("https://shop-49287-default-rtdb.firebaseio.com/products.json", this.state)
  //     .then((response) =>
  //       this.props.addNewProduct({ ...this.state, id: response.data.name }));
  //   this.setState({ ...initialState });
  // }

  //доп функция toDataUrl
  function;

  onHandleChange = (e) => {
    const { name, value, checked, type } = e.target;
    if (type === "checkbox") {
      this.setState({ [name]: checked });
      return;
    }

    // if (type === file) {
    //const result = await toDataUrl(e.target);
    //   this.setState({ [name]: toDataUrl(e.target) })
    // }
    this.setState({ [name]: value });
  };

  render() {
    const { name, image, price, description, category, isSale } = this.state;
    return (
      <>
        <ProductFormStyled
          onSubmit={this.onHandleSubmit}
          className="productForm"
        >
          <div className="formWrapper">
            <div className="formColumn">
              <label>
                Name
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={this.onHandleChange}
                />
              </label>

              <label>
                Image
                <input
                  type="text"
                  name="image"
                  value={image}
                  onChange={this.onHandleChange}
                />
              </label>
              <label>
                Description
                <textarea
                  name="description"
                  cols="50"
                  rows="6"
                  value={description}
                  onChange={this.onHandleChange}
                />
              </label>
            </div>

            <div className="formColumn">
              <label>
                Price
                <input
                  type="number"
                  name="price"
                  value={price}
                  onChange={this.onHandleChange}
                />
              </label>

              <label>
                Category
                <select
                  name="category"
                  value={category}
                  onChange={this.onHandleChange}
                >
                  {categories.map((category) => (
                    <option key={category} value={category.toLowerCase()}>
                      {category}
                    </option>
                  ))}
                </select>
              </label>

              <label>
                On sale
                <input
                  type="checkbox"
                  name="isSale"
                  checked={isSale}
                  onChange={this.onHandleChange}
                />
              </label>
            </div>
          </div>
          <div className="button">
            <button type="submit" className="submitBtn">
              Add product
            </button>
          </div>
        </ProductFormStyled>
      </>
    );
  }
}

export default ProductForm;

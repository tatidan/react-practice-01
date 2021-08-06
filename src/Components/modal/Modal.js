import React, { Component } from "react";
import { ModalContainer } from "./ModalStyled";

class Modal extends Component {
  state = {};

  componentDidMount() {
    window.addEventListener("keydown", this.handleEsc);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleEsc);
  }

  handleEsc = (e) => {
    e.code === "Escape" && this.props.handleCloseModal();
  };
  handleClick = () => this.props.handleCloseModal();

  handleBackdropClick = (e) => {
    if (e.target !== e.currentTarget) {
      return;
    }
    this.props.handleCloseModal();
  };

  render() {
    return (
      <ModalContainer onClick={this.handleBackdropClick}>
        <div className="modal">{this.props.children}</div>
      </ModalContainer>
    );
  }
}

export default Modal;

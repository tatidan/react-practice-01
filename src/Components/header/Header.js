import React, { Component } from "react";
import colors from "../../styles/colors";
import HeaderList from "./headerList/HeaderList";
import { HeaderStyled } from "./HeaderStyled";
import sprite from "../../icons/header/header.svg";
import Modal from "../modal/Modal";

class Header extends Component {
  state = {
    width: window.innerWidth,
    breakPoint: 767,
    isModalOpen: false,
  };

  componentDidMount() {
    window.addEventListener("resize", this.handleResizeWindow);
    const body = document.querySelector("body");
    body.style.overflow = "hidden";
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResizeWindow);
    const body = document.querySelector("body");
    body.style.overflow = "auto";
  }

  handleResizeWindow = () => this.setState({ width: window.innerWidth });

  setOpenModal = () => {
    this.setState((prev) => ({ isModalOpen: !prev.isModalOpen }));
  };

  render() {
    const { width, breakPoint, isModalOpen } = this.state;
    return (
      <>
        <HeaderStyled colors={colors}>
          <h2 className="headerLogo">LOGO</h2>
          {width > breakPoint ? (
            <nav>
              <HeaderList colors={colors} />
            </nav>
          ) : (
            <svg className="burgerMenu" onClick={this.setOpenModal}>
              <use href={sprite + "#icon-menu_40px"} />
            </svg>
          )}
        </HeaderStyled>
        {isModalOpen && (
          <Modal handleCloseModal={this.setOpenModal}>
            <HeaderList />
          </Modal>
        )}
      </>
    );
  }
}

export default Header;

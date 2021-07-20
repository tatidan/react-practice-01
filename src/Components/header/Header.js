import React from "react";
import colors from "../../styles/colors";
import HeaderList from "./headerList/HeaderList";
import { HeaderStyled } from "./HeaderStyled";

const Header = () => {
  return (
    <HeaderStyled colors={colors}>
      <h2 className="headerLogo">LOGO</h2>
      <nav>
        <HeaderList colors={colors} />
      </nav>
    </HeaderStyled>
  );
};

export default Header;

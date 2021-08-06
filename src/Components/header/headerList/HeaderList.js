import React from "react";
import data from "../../../data";
// import colors from "../../../styles/colors";
import { HeaderNavigation } from "./HeaderListStyled";

const HeaderList = () => {
  return (
    <HeaderNavigation>
      <ul className="navigationList">
        {data.header.map((headerItem) => (
          <li key={headerItem} className="navigationListItem">
            <a href="/#" className="navigationListItemAnchor">
              {headerItem}
            </a>
          </li>
        ))}
      </ul>
    </HeaderNavigation>

    // <HeaderListStyled colors={colors}>
    //   {data.header.map(headerItem => (
    //     <li key={headerItem} className="headerListItem">
    //       <a href="/#" className="headerListLink">
    //         {headerItem}
    //       </a>
    //     </li>
    //   ))}
    // </HeaderListStyled>
  );
};

export default HeaderList;

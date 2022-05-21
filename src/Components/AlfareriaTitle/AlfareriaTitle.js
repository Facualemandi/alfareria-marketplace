import React from "react";
import "./AlfareriaTitle.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";
import AlfareriaMenuLateral from "../AlfareriaMenuLateral/AlfareriaMenuLateral";


const AlfareriaTitle = ({handleOpenMenu, openMenu}) => {
  return (
    <>
      <nav className="nav" >
        <h1 className="title"> Consegui Todos los productos sobre alfareria</h1>
        {openMenu && <VscChromeClose  className="nav icon_menu" onClick={handleOpenMenu}/>}
        {! openMenu && <GiHamburgerMenu className="nav icon_menu" onClick={handleOpenMenu}/>}
        <section>
         <AlfareriaMenuLateral openMenu={openMenu}/>
         
        </section>

      </nav>
    </>
  );
};

export default AlfareriaTitle;

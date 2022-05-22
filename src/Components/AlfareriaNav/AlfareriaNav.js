import React from "react";
import "./AlfareriaNav.css";
import { VscClose } from "react-icons/vsc";
import { RiMenu5Fill } from "react-icons/ri";
import AlfareriaMenuLateral from "../AlfareriaMenuLateral/AlfareriaMenuLateral";

const AlfareriaNav = ({ handleOpenMenu, openMenu }) => {
  return (
    <>
      <nav className="nav">
        {openMenu && (
          <VscClose className="nav icon_menu" onClick={handleOpenMenu} />
        )}
        {!openMenu && (
          <RiMenu5Fill className="nav icon_menu" onClick={handleOpenMenu} />
        )}
        <section>
          <AlfareriaMenuLateral openMenu={openMenu} />
        </section>
      </nav>
    </>
  );
};

export default AlfareriaNav;

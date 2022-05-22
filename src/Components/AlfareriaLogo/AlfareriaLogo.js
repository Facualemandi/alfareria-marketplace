import React from "react";
import Logo from "./CeramicaArtesanalLogo.png";
import "../AlfareriaLogo/AlfareriaLogo.css";

const AlfareriaLogo = () => {
  return (
    <>
      <section className="logo_artesanal">
        <img src={Logo} alt="Ceramica Artesanal" className="logo_ceramica" />
        <p className="ceramica_title">Encontra y busca todo sobre Ceramica </p>
      </section>
    </>
  );
};

export default AlfareriaLogo;

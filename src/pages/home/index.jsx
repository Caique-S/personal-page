import React from "react";
import "./styles.scss";

export const Home = () => {
  return (
    <div className="main-container">
      <span className="top-menu">
        <div></div>
      </span>
      <div className="info-container">
        <p>Aqui será exibido as informações de Endereço</p>
      </div>
      <div className="banners-container"></div>
      <div className="products-container">
        <div className="itens-container">
          <img src="" alt=""></img>
          <h3>Pizza</h3>
        </div>
        <div className="itens-container">
          <img src="" alt=""></img>
          <h3>Yakisoba</h3>
        </div>
        <div className="itens-container">
          <img src="" alt=""></img>
          <h3>Massas</h3>
        </div>
        <div className="itens-container">
          <img src="" alt=""></img>
          <h3>Refrigerantes</h3>
        </div>
      </div>
      <footer className="footer-container">
        <div className="buttons">
            <img src="" alt=""></img>
        </div>
        <div className="buttons">
            <img src="" alt=""></img>
        </div>
        <div className="buttons">
            <img src="" alt=""></img>
        </div>
        <div className="buttons">
            <img src="" alt=""></img>
        </div>
      </footer>
    </div>
  );
};

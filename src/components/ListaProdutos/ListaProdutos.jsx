import React from "react";
import Styles from "./listaProdutos.styles.css";
import CardLivro from "../CardLivro/CardLivro";

const ListaProdutos = () => {
  return (
    <div className="container-lista-produtos">
      <div className="container">
        <h2>Alguns títulos que podem te interessar: </h2>
        <div className="container-lista">
          <CardLivro/>
          <CardLivro/>
          <CardLivro/>
          <CardLivro/>
        </div>
      </div>
    </div>
  );
};

export default ListaProdutos;

import React from "react";
import '../ListaProdutos/listaProdutos.styles.css'
import CardLivro from "../CardLivro/CardLivro";

const ListaProdutos = () => {
  return (
    <div className="container-lista-produtos">
      <div>
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

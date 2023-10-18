import React from "react";
import Styles from "./listaProdutos.styles.css";

const ListaProdutos = () => {
  return (
    <div className="container-lista-produtos">
      <div className="container">
        <h2>Alguns títulos que podem te interessar: </h2>
        <div className="container-lista">
          <div className="card-livro">
            <div className="container-imagem-livro">
              <img src="" alt="capa do livro"></img>

            </div>
            <div className="container-detalhes-livro"></div>
              <h3>Título do Livro</h3>
              <p> Autor do Livro</p>
              <p>Preço</p>
              <a href="">Botão?</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListaProdutos;

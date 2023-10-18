import React from "react";
import Styles from "./listaProdutos.styles.css";
import CapaLivro from '../../images/livro-capa-teste.png'

const ListaProdutos = () => {
  return (
    <div className="container-lista-produtos">
      <div className="container">
        <h2>Alguns títulos que podem te interessar: </h2>
        <div className="container-lista">
          <div className="card-livro">
            <div className="container-imagem-livro">
              <img className="imagem-livro" src={CapaLivro} alt="capa do livro"></img>

            </div>
            <div className="container-detalhes-livro"></div>
              <h3 className="titulo-livro">Título do Livro</h3>
              <p className="nome-autor">Autor do Livro</p>
              <p className="preco">R$39,90</p>
              <a className="botao-compra" href="">Add carrinho</a>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default ListaProdutos;

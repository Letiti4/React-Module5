import React from "react";
import Style from './cardLivro.styles.css'
import CapaLivro from '../../images/livro-capa-teste.png'

const CardLivro = () => {
    return (
        <div className="card-livro">
            <div className="container-imagem-livro">
                <img className="imagem-livro" src={CapaLivro} alt="capa do livro"></img>
            </div>
            <div className="container-detalhes-livro"></div>
            <h3 className="titulo-livro">Título do Livro</h3>
            <p className="nome-autor">Autor do Livro</p>
            <p className="preco">R$39,90</p>
            <a className="botao-compra" href="">
                Add carrinho
            </a>
        </div>
    );
};

export default CardLivro;

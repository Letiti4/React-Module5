import React from 'react';
import './cardLivro.styles.css';
import { Link } from 'react-router-dom';

const CardLivro = ({ titulo, autor, preco, capa, link }) => {
    //   const descricaoUrl = `/livro-descricao/${id}`;

    return (
        <div className="card-livro">
            <div className="container-imagem-livro">
                <Link to={link}>
                    <img className="imagem-livro" src={capa} alt="capa do livro" />
                </Link>
            </div>
            <div className="container-detalhes-livro">
                <h3 className="titulo-livro">{titulo}</h3>
                <p className="nome-autor">{autor}</p>
                <p className="preco">{preco}</p>
                <button className="botao-compra">
                    <p>COMPRE JÁ</p>
                </button>
            </div>
        </div>
    );
};

export default CardLivro;

// import React from 'react';
// import './cardLivro.styles.css';
// import { Link } from 'react-router-dom';

// const CardLivro = ({ livros }) => {
// //   const descricaoUrl = `/livro-descricao/${id}`;

//   return (
//     <div className="card-livro">
//       <div className="container-imagem-livro">
//         <Link to={`/livro-descricao/${livros.id}`}>
//           <img className="imagem-livro" src={livros.capa} alt="capa do livro" />
//         </Link>
//       </div>
//       <div className="container-detalhes-livro">
//         <h3 className="titulo-livro">{livros.titulo}</h3>
//         <p className="nome-autor">{livros.autor}</p>
//         <p className="preco">{livros.preco}</p>
//         <button className="botao-compra">
//           <p>Adicionar ao carrinho</p>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CardLivro;
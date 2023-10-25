import React, { useState, useEffect, useContext } from 'react';
import './livroDescricao.styles.css';
import { livros } from '../../core/Livros';
import { useParams, useNavigate } from 'react-router-dom';

const PequenoPrincipe = () => {
  //   const { id } = useParams();
  //   const [livro, setlivro] = useState({});
  //   const navigate = useNavigate();

  //   useEffect(() => {
  //     console.log(id); // Adicione esta linha
  //     const livroEncontrado = livros.find(livro => livro.id === parseInt(id));
  //     if (livroEncontrado) {
  //        setlivro(livroEncontrado);
  //     } else {

  //        navigate('/pagina-de-erro');
  //        console.error();
  //     }
  //  }, [id, livros, navigate]);

  const [livro, setlivro] = useState({
    id: "12",
    titulo: "O Pequeno Príncipe",
    autor: "Antoine de Saint-Exupéry",
    estado: "usado",
    preco: "R$ 15,90",
    capa: 'https://m.media-amazon.com/images/I/51nNwwVSclL._AC_UF1000,1000_QL80_.jpg'
  });

  return (
    <section className='container-descricao'>
      <div className='container-flex'>
        <div className='container-imagem-livro-descricao'>
          <img src={livro.capa} alt={`Capa do livro ${livro.titulo}`} className='capa-livro' />
        </div>

        <div className='container-descricao-livro'>
        <h2>{livro.titulo}</h2>
          <p>Autor: {livro.autor}</p>
          <p>{livro.descricao}</p>
          <p>Estado: {livro.estado}</p>
          <h3>{livro.preco}</h3>
          <button className='botao-compra'>COMPRE JÁ</button>
        </div>
      </div>
    </section>
  );
};

export default PequenoPrincipe;
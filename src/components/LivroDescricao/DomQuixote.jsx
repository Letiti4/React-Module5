import React, { useState, useEffect, useContext } from 'react';
import './livroDescricao.styles.css';
import { livros } from '../../core/Livros';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../Header/Header';

const DomQuixote = () => {
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
    titulo: "Dom Quixote",
    autor: "Miguel de Cervantes",
    descricao:"'Dom Quixote' é uma obra-prima da literatura espanhola escrita por Miguel de Cervantes. O romance narra as aventuras de um cavaleiro idoso, Dom Quixote, que enlouquece devido à leitura excessiva de histórias de cavalaria. Convencido de que é um cavaleiro andante, ele parte em busca de aventuras e justiça, acompanhado por seu fiel escudeiro Sancho Panza. A história é uma sátira inteligente que explora a tensão entre a realidade e a imaginação, enquanto revela profundas reflexões sobre a natureza da loucura, heroísmo e idealismo. Uma obra que transcende sua época, continuando a cativar leitores de todas as idades, oferecendo uma visão única sobre os sonhos e a natureza humana.",
    estado: "NOVO",
    preco: "R$24,90",
    capa: 'https://m.media-amazon.com/images/I/91PtC5UZNoL._AC_UF1000,1000_QL80_.jpg'
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
          <button className='botao-compra-descricao'>COMPRE JÁ</button>
        </div>
      </div>
    </section>
  );
};

export default DomQuixote;
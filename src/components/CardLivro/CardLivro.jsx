import '../CardLivro/cardLivro.styles.css'
import CapaLivro from '../../assets/livro-capa-teste.jpg'

const CardLivro = ({ titulo, autor, preco }) => {

    return (
        <div className="card-livro">
            <div className="container-imagem-livro">
                <img className="imagem-livro" src={CapaLivro} alt="capa do livro"></img>
            </div>
            <div className="container-detalhes-livro">
                <h3 className="titulo-livro">{titulo}</h3>
                <p className="nome-autor">{autor}</p>
                <p className="preco">{preco}</p>
                <button className="botao-compra" href=""><p>Adicionar ao carrinho</p></button>
            </div>
        </div>
    );
};

export default CardLivro;

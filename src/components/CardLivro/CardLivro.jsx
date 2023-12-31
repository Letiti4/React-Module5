import './cardLivro.styles.css';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const CardLivro = ({ titulo, autor, preco, capa, link }) => {

    const addCarrinho = () => {
        toast.success("Livro adicionado ao carrinho")
    }

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
                <button onClick={addCarrinho} className="botao-compra">
                    <p>COMPRE JÁ</p>
                </button>
            </div>
        </div>
    );
};

export default CardLivro;
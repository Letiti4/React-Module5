import '../ListaProdutosNovos/listaProdutosNovos.styles.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import CardLivro from '../CardLivro/CardLivro';
import { getLivros } from '../../services/api';

const ListaProdutosNovos = () => {
    const [livros, setLivros] = useState([]);

    useEffect(() => {
        getLivros()
            .then((data) => {
                setLivros(data);
            })
            .catch((error) => {
                console.error('Erro ao buscar livros:', error);
            });
    }, []);

    return (
        <div className="container-lista-produtos">
            <div>
                <h1> Recém-chegados: </h1>
                <div className="container-lista">
                    {livros.slice(0, 4).map((livro) => (
                        <div key={livro._id}>
                            <CardLivro
                                titulo={livro.titulo}
                                autor={livro.autor}
                                preco={livro.preco}
                                capa={livro.capa}
                                link={livro.link}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ListaProdutosNovos;

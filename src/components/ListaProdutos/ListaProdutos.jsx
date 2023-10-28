import React, { useState, useEffect } from 'react';
import './listaProdutos.styles.css';
import axios from 'axios';
import CardLivro from '../CardLivro/CardLivro';

const ListaProdutos = () => {
    const [pesquisa, setPesquisa] = useState("");
    const [livros, setLivros] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/livros')
            .then((response) => {
                const livrosData = response.data;
                setLivros(livrosData);
            })
            .catch((error) => {
                console.error('Erro ao buscar lista de livros:', error);
            });
    }, []);

    return (
        <div className="container-lista-produtos">
            <div>
                <h2>Alguns títulos que podem te interessar: </h2>

                <div className='boxPesquisa'>
                    <input
                        className='pesquisa'
                        value={pesquisa}
                        onChange={(e) => setPesquisa(e.target.value)}
                        placeholder='Pesquise um livro'
                    />
                </div>

                <div className="container-lista">
                    {livros
                        .filter((livro) =>
                            livro.titulo.toLowerCase().includes(pesquisa.toLowerCase())
                        )
                        .map((livro) => (
                            <CardLivro
                                key={livro.id}
                                titulo={livro.titulo}
                                autor={livro.autor}
                                preco={livro.preco}
                                capa={livro.capa}
                                link={`/livro-descricao/${livro.id}`}
                            />
                        ))}
                </div>
            </div>
        </div>
    );
};

export default ListaProdutos;
import '../ListaProdutos/listaProdutos.styles.css'
import { livros } from "../Livros/Livros";
import { useState } from 'react';
import CardLivro from "../CardLivro/CardLivro";

const ListaProdutos = () => {

    const [pesquisa, setPesquisa] = useState("")

    return (
        <div className="container-lista-produtos">
            <div>
                <h2>Alguns títulos que podem te interessar: </h2>

                <div className='boxPesquisa'>
                    <input className='pesquisa' value={pesquisa} onChange={(e) => setPesquisa(e.target.value)} placeholder='Pesquise um livro'></input>
                    <button className=''>Pesquisar</button>
                </div>

                <div className="container-lista">
                    {livros.filter((livro) => livro.titulo.toLowerCase().includes(pesquisa.toLowerCase())).map(livro => <CardLivro key={livros.id} titulo={livros.titulo} autor={livros.autor} preco={livros.preco} />
                    )}
                </div>
            </div>
        </div>
    )
}

export default ListaProdutos;

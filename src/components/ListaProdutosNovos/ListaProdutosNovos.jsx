import '../ListaProdutosNovos/listaProdutosNovos.styles.css'
import { livrosPromo } from '../../core/LivrosPromo';
import { useState } from 'react';
import CardLivro from '../CardLivro/CardLivro';

const ListaProdutosNovos = () => {

    const [pesquisa] = useState("")

    return (
        <div className="container-lista-produtos">
            <div>
                <h1> Recém-chegados: </h1>

                <div className="container-lista">
                    {livrosPromo.filter((livro) => livro.titulo.toLowerCase().includes(pesquisa.toLowerCase())).map(livro => 
                    <CardLivro key={livro.id} titulo={livro.titulo} autor={livro.autor} preco={livro.preco} capa={livro.capa} link={'/livro-descricao/12'} />
                    )}
                </div>

            </div>
        </div>
    )
}

export default ListaProdutosNovos;

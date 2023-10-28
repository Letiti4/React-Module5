import '../ListaProdutosNovos/listaProdutosNovos.styles.css'
import { livrosPromo } from '../../core/LivrosPromo';
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import CardLivro from '../CardLivro/CardLivro';
import { getLivros } from '../../services/api';

// const ListaProdutosNovos = () => {

//     const [pesquisa] = useState("")

//     const urlApi = "http://localhost:3000/livros"
//     const [livros, setLivros] = useState([])

//     const getLivros = async() => {
//         try {
//             const resposta = await axios.get(urlApi)
//             const data = resposta.data
//             setLivros(data)
//         } catch (error) {
//             console.log(error)
//         }
//     }

    // useEffect(() => {
    //     getLivros()
    // }, [])
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
                        {livros.map((livro) => (
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

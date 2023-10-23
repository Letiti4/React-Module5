import React from 'react'
import ListaProdutos from '../../components/ListaProdutos/ListaProdutos'
import Header from '../../components/Header/Header'
import BarraPesquisa from '../../components/BarraPesquisa/BarraPesquisa'
import Footer from '../../components/Footer/Footer'

const Livros = () => {
    return (
        <>
            <Header />
            <ListaProdutos />
            <Footer/>
        </>
    )
}

export default Livros
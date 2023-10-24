// import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Layout from '../../components/Layout/Layout'
import FormContato from '../../components/FormContato/FormContato'
import ListaProdutosNovos from '../../components/ListaProdutosNovos/ListaProdutosNovos'


const HomePage = () => {
    return (
        <section>
            <Header />
            <Layout />
            <ListaProdutosNovos/>
            <FormContato />
            <Footer />
        </section>
    )
}

export default HomePage
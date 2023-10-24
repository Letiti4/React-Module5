// import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Layout from '../../components/Layout/Layout'
import ListaProdutos from '../../components/ListaProdutos/ListaProdutos'
import FormContato from '../../components/FormContato/FormContato'


const HomePage = () => {
    return (
        <section>
            <Header />
            <Layout />
            <ListaProdutos />
            <FormContato />
            <Footer />
        </section>
    )
}

export default HomePage
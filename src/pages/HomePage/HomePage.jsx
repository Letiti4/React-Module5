// import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Layout from '../../components/Layout/Layout'
import '../HomePage/homePage.style.css'
import ListaProdutos from '../../components/ListaProdutos/ListaProdutos'

const HomePage = () => {
    return (
        <section>
            <Header />
            <Layout />
            {/* <ListaProdutos /> */}
            <Footer />
        </section>
    )
}

export default HomePage
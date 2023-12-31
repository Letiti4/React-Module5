// import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Layout from '../../components/Layout/Layout'
import ListaProdutosNovos from '../../components/ListaProdutosNovos/ListaProdutosNovos'
import MenuFooter from '../../components/MenuFooter/MenuFooter'
import BannerInfo from '../../components/BannerInfo/BannerInfo'


const HomePage = () => {
    return (
        <section>
            <Header />
            <Layout />
            <BannerInfo/>
            <ListaProdutosNovos/>
            <MenuFooter/>
            <Footer />
        </section>
    )
}

export default HomePage
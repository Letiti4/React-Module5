import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import LivroDescricao from "../../components/LivroDescricao/Livrodescricao";

const DetalhesLivro= () => {
    return (
        <section>
            <Header />
            <LivroDescricao/>
            <Footer />
        </section>
    );
};

export default DetalhesLivro;

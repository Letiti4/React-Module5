import React from "react";
import '../ListaProdutos/listaProdutos.styles.css'
import CardLivro from "../CardLivro/CardLivro";
// import BarraPesquisa from "../BarraPesquisa/BarraPesquisa";

const ListaProdutos = () => {

    // const [pesquisa, setPesquisa] = useState("") 

    return (
        
            <div className="container-lista-produtos">
                <div>
                    <h2> Promoções: </h2>
                    {/* <BarraPesquisa /> */}

                    <div className="container-lista">
                        <CardLivro titulo={'Alice no país das maravilhas'} autor={'Dona MAria'} preco={'R$39,90'} />
                        <CardLivro titulo={'Titanic: Memórias de uma naufrágio'} autor={'Thiago Souza'} preco={'R$59,90'} />
                        <CardLivro titulo={'Pinóquio (Edição de Bolso)'} autor={'George Marlon'} preco={'R$55,90'} />
                        <CardLivro />
                        {/* <CardLivro />
                        <CardLivro />
                        <CardLivro />
                        <CardLivro />
                        <CardLivro />
                        <CardLivro />
                        <CardLivro />
                        <CardLivro />
                        <CardLivro />
                        <CardLivro />
                        <CardLivro /> */}
                    </div>
                </div>
            </div>
        
    )
}

export default ListaProdutos;

import React from 'react'
import { useNavigate } from 'react-router-dom'
import livrosLc from "../../assets/livrosLc.jpg"
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import '../Perfil/perfil.style.css'

const Perfil = () => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/livros')
    }

    return (
        <>
            <Header />
            <section className="containerCadastro">
                <div className="imagemCadastro">
                    <img src={livrosLc} alt="" />
                </div>
                <div className="containerConteudo">
                    <div className="containerGeral">
                        <div className="containerForm">
                            <h2>Seu perfil</h2>
                            <form>
                                <div className="formGroup">
                                    <label htmlFor="">Nome de usuário:</label>
                                    <input type="usuario" />
                                </div>
                                <div className="formGroup">
                                    <label htmlFor="">Email:</label>
                                    <input type="email" />
                                </div>
                                <div className="formGroup">
                                    <label htmlFor="">Senha:</label>
                                    <input type="senha" />
                                </div>
                                <div className="formGroup">
                                    <label htmlFor="">Telefone:</label>
                                    <input type="senha" />
                                </div>
                                <div className="formGroup">
                                    <label htmlFor="">Endereço:</label>
                                    <input type="senha" />
                                </div>
                                <div className="botoes">
                                    <button className="botaoAtualizar">Atualizar Informações</button>
                                    <button className="formEnviar">Excluir conta</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}


export default Perfil
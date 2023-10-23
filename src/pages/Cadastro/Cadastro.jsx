import React from 'react'
import './Cadastro.styles.css'
import livrosLc from "../../assets/livrosLc.jpg"
import Header from '../../components/Header/Header'
import { useNavigate } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'

const Cadastro = () => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/login')
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
                            <h2>Cadastre-se</h2>
                            <form>
                                <div className="formGroup">
                                    <label htmlFor="">Usuário:</label>
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
                                    <button onClick={() => { handleClick }} className="formEnviar">Criar conta</button>
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

export default Cadastro
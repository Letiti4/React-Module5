// import React from 'react'
import { useNavigate } from "react-router-dom"
import livrosLc from "../../assets/livrosLc.jpg"
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"

const Login = () => {
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
                            <h2>Login</h2>
                            <form>
                                <div className="formGroup">
                                    <label htmlFor="">Email:</label>
                                    <input type="email" />
                                </div>
                                <div className="formGroup">
                                    <label htmlFor="">Senha:</label>
                                    <input type="senha" />
                                </div>
                                <div className="formGroup">
                                    <button onClick={handleClick} className="formEnviar">Entrar</button >
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

export default Login
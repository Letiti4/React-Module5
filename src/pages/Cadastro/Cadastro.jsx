import React from 'react'
import './Cadastro.styles.css'
import livrosLc from "../../assets/livrosLc.jpg"
import Header from '../../components/Header/Header'
const Cadastro = () => {
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
                            <p>Crie uma conta!</p>
                            <form>
                                <div className="formGroup">
                                    <label htmlFor="">Usuário</label>
                                    <input type="usuario" className="formInput" />
                                </div>
                                <div className="formGroup">
                                    <label htmlFor="">Email</label>
                                    <input type="email" className="formInput" />
                                </div>
                                <div className="formGroup">
                                    <label htmlFor="">Senha</label>
                                    <input type="senha" className="formInput" />
                                </div>
                                <div className="formGroup">
                                    <button className="formEnviar">Criar conta</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Cadastro
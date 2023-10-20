import React from 'react'
import livrosLc from "../../assets/livrosLc.jpg"
const Login = () => {
    return (
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
                                <label htmlFor="">Email</label>
                                <input type="email" className="formInput" />
                            </div>
                            <div className="formGroup">
                                <label htmlFor="">Senha</label>
                                <input type="senha" className="formInput" />
                            </div>
                            <div className="formGroup">
                                <button className="formEnviar">Entrar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login
// import React from 'react'
import { useNavigate } from "react-router-dom"
import React, { useState } from 'react'
import livrosLc from "../../assets/livrosLc.jpg"
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import { loginUsuario } from '../../services/api';


const Login = () => {

    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [error, setError] = useState()

    async function handleLogin(e) {
        e.preventDefault()
        const resposta = await loginUsuario(email, senha)

        if (resposta.success) {
            navigate('/livros')
            localStorage.setItem('id', resposta.data.id)
            localStorage.setItem('nome', resposta.data.nome)
        } else {
            setError(resposta.message)
        }
        console.log(resposta)
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
                                    <input type="email" value={email}
                                        onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div className="formGroup">
                                    <label htmlFor="">Senha:</label>
                                    <input type="senha" value={senha}
                                        onChange={(e) => setSenha(e.target.value)} />
                                    {error && <p style={{ color: 'red' }}>{error}</p>}
                                </div>
                                <div className="formGroup">
                                    <button onClick={handleLogin} className="formEnviar">Entrar</button >
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
// import React from 'react'
import { useNavigate } from "react-router-dom"
import React, { useState } from 'react'
import livrosLc from "../../assets/livrosLc.jpg"
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import { loginUsuario } from '../../services/api';
import { Link } from "react-router-dom"


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
                    
                            <h2>Login</h2>
                            <form>
                            <div className="geralInput">

                                <div className="caixaInput">
                                    <label htmlFor="">Email:</label>
                                    <input type="email" value={email}
                                        onChange={(e) => setEmail(e.target.value)} placeholder="Digite seu email" />
                                </div>
                                <div className="caixaInput">
                                    <label htmlFor="">Senha:</label>
                                    <input type="senha" value={senha} placeholder="Digite sua senha"
                                        onChange={(e) => setSenha(e.target.value)} />
                                    {error && <p style={{ color: 'red' }}>{error}</p>} 

                                    <p>
                                        Não possui login?{" "}
                                        <Link to="/cadastro">
                                            Cadastre-se
                                        </Link>
                                    </p>
                                    
                                </div>

                            </div>

                                <div>
                                    <button onClick={handleLogin} className="btnEnviar">Entrar</button >
                                </div>
                            </form>
                
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
    
}

export default Login
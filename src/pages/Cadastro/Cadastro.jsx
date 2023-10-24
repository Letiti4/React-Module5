import React, { useState } from "react";
import './Cadastro.styles.css'
import livrosLc from "../../assets/livrosLc.jpg"
import Header from '../../components/Header/Header'
import { useNavigate } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import { postUsuario } from "../../services/api";

const Cadastro = () => {

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [confirmaSenha, setConfirmaSenha] = useState('')
    const navigate = useNavigate()
    const handleCadastro = async (e) => {
        e.preventDefault()
        
        const body = {
            nome,
            email
        }

        if (senha === confirmaSenha) {
            const resposta = await postUsuario(body, senha)
            localStorage.setItem('id', resposta.data.id)
            localStorage.setItem('nome', resposta.data.nome)
            console.log(resposta)
            console.log("Deu certo, redirecionando para login"); //adicionar um alert ou modal para dizer que o cadastro foi realizado
        navigate('/login');

        } else {
            alert('as senhas precisam ser iguais')
        }
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
                                    <input type="usuario"
                                        value={nome}
                                        onChange={(e) => setNome(e.target.value)} />
                                </div>
                                <div className="formGroup">
                                    <label htmlFor="">Email:</label>
                                    <input type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div className="formGroup">
                                    <label htmlFor="">Senha:</label>
                                    <input type="senha" value={senha}
                                        onChange={(e) => setSenha(e.target.value)} />
                                </div>
                                <div className="formGroup">
                                    <label htmlFor="">Confirmação de Senha:</label>
                                    <input type="senha" value={confirmaSenha}
                                        onChange={(e) => setConfirmaSenha(e.target.value)} />
                                </div>
                                <div className="formGroup">
                                    <button width="100%" onClick={handleCadastro}
                                        className="formEnviar">Criar conta</button>
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
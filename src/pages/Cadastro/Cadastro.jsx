import livrosLc from "../../assets/livrosLC.jpg"
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import { postUsuario } from "../../services/api";
import { toast } from "react-toastify";
import './Cadastro.styles.css'

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
            toast.success("Cadastro realizado com sucesso!")
            navigate('/login');

        } else {
            toast.warning('As senhas precisam ser iguais!')
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
                        <div className="tituloCadastro">
                            <h2>Cadastre-se</h2>
                        </div>
                        <form>
                            <div className="geralInput">
                                <div className="caixaInput">
                                    <label htmlFor="">Usuário:</label>
                                    <input type="usuario"
                                        value={nome}
                                        onChange={(e) => setNome(e.target.value)} placeholder="Digite seu usuário" />
                                </div>
                                <div className="caixaInput">
                                    <label htmlFor="">Email:</label>
                                    <input type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)} placeholder="Digite seu email" />
                                </div>
                                <div className="caixaInput">
                                    <label htmlFor="">Senha:</label>
                                    <input type="senha" value={senha}
                                        onChange={(e) => setSenha(e.target.value)} placeholder="Digite sua senha" />
                                </div>
                                <div className="caixaInput">
                                    <label htmlFor="">Confirmação de Senha:</label>
                                    <input type="senha" value={confirmaSenha}
                                        onChange={(e) => setConfirmaSenha(e.target.value)} placeholder="Digite sua senha" />
                                </div>
                            </div>
                            <button width="100%" onClick={handleCadastro} className="btnEnviar">Criar conta</button>
                        </form>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Cadastro
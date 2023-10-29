import livrosLc from "../../assets/livrosLC.jpg"
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import { useState } from 'react'
import { Link } from "react-router-dom"
import { toast } from "react-toastify";
import axios from "axios"
import "../Login/Login.styles.css"


const Login = () => {
    const urlApi = "http://localhost:3000/clientes"

    const [senha, setSenha] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState(null);

    async function submit() {

        try {

            const cliente = {
                email: email,
                senha: senha
            }
            const response = await axios.post(urlApi, cliente)
            console.log(response)
            const userId = response.data.id
            localStorage.setItem('userId', JSON.stringify(userId))
            toast.success("Login realizado com sucesso!")
            setTimeout(() => {
                window.location.href = "/perfil"
            }, 2000);
        } catch (error) {
            toast.error("Dados invalidos, tente novamente!")
            console.log(error)
        }
    }

    return (
        <>
            <Header />
            <section className="containerLogin">
                <div className="imagemLogin">
                    <img src={livrosLc} alt="" />
                </div>
                <div className="containerConteudoLogin">
                    <div className="containerGeralLogin">
                        <h1 className="tituloLogin">Login</h1>
                        <form>
                            <div className="geralInputLogin">
                                <div className="caixaInputLogin">
                                    <label htmlFor="">Email:</label>
                                    <input type="text" value={email}
                                        onChange={(e) => { setEmail(e.target.value) }} placeholder="Digite seu email" />
                                </div>
                                <div className="caixaInputLogin">
                                    <label htmlFor="">Senha:</label>
                                    <input type="password"
                                        value={senha}
                                        onChange={(e) => { setSenha(e.target.value) }} />
                                    {error && <p style={{ color: 'red' }}>{error}</p>}
                                    <p>
                                        Não possui login?{" "}
                                        <Link className="link" to="/cadastro">
                                            Cadastre-se
                                        </Link>
                                    </p>
                                </div>
                            </div>
                            <div>
                                <button type="button" onClick={submit} className="btnEnviar">
                                    Entrar
                                </button>
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
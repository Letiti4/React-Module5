import { useState, useEffect } from 'react';
import livrosLc from "../../assets/livrosLC.jpg";
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import { deleteUsuario } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import '../Perfil/perfil.style.css';
import Modal from '../../components/Modal/Modal';

const Perfil = () => {
    const navigate = useNavigate();
     
    const storedUserData = localStorage.getItem('userData');
    const userData = storedUserData ? JSON.parse(storedUserData) : {
        nome: "",
        email: "",
        senha: "",
        telefone: "",
        endereco: ""
    };    

    const storedUserId = localStorage.getItem('userId');    
    const urlApi = `http://localhost:3000/clientes/${storedUserId}`;
    const [cliente, setCliente] = useState(userData);

    const getCliente = async() => {
        try {
            const resposta = await axios.get(urlApi)
            const data = resposta.data
            setCliente(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if (storedUserId) {
            getCliente();
        }
    }, [storedUserId]);


    const [showAlert, setShowAlert] = useState(false);

    const handleAtualizarInformacoes = (e) => {
        e.preventDefault();
        const updatedUsuario = {
            nome: e.target.elements.nome.value,
            email: e.target.elements.email.value,
            senha: e.target.elements.senha.value,
            telefone: e.target.elements.telefone.value,
            endereco: e.target.elements.endereco.value,
        };
        setUsuario(updatedUsuario);
        setShowAlert(true);
    };

    const [modalAberto, setModalAberto] = useState(false)
    
    const handleExcluir = () => {
        setModalAberto(true)
    }

    const handleExcluirConta = (senhaDigitada) => {
        if (senhaDigitada === cliente.senha) {
            deleteUsuario(cliente.id, senhaDigitada)
                .then((exclusaoBemSucedida) => {
                    if (exclusaoBemSucedida) {
                        toast.success('Conta excluída com sucesso!')
                        setModalAberto(false)
                        navigate('/livros');
                    } else {
                        setModalAberto(false)
                        toast.error("Falha ao excluir a conta.");
                    }
                }).catch((erro) => {
                    console.error('Erro ao excluir a conta:', erro);
                });
            } else {
                setModalAberto(false)
                toast.warning('Senha incorreta. Sua conta não foi excluída.');
            }
    };

    return (
        <>
            <Header />

            <Modal handleExcluirConta={handleExcluirConta} open={modalAberto} fechaModal={() => setModalAberto(false)} />

            <section className="containerCadastro">
                <div className="imagemCadastro">
                    <img src={livrosLc} alt="" />
                </div>
                <div className="containerConteudo">
                    <div className="containerGeral">
                        <div className="tituloCadastro">
                        </div>
                        <h2>Seu perfil</h2>
                        <form onSubmit={handleAtualizarInformacoes}>
                            <div className="geralInput">
                                <div className="caixaInput">
                                    <label htmlFor="">Nome de usuário:</label>
                                    <input
                                        type="usuario"
                                        name="nome"
                                        value={cliente.nome}
                                        onChange={(e) => setCliente({ ...cliente, nome: e.target.value })}
                                    />
                                </div>
                                <div className="caixaInput">
                                    <label htmlFor="">Email:</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={cliente.email}
                                        onChange={(e) => setCliente({ ...cliente, email: e.target.value })}
                                    />
                                </div>
                                <div className="caixaInput">
                                    <label htmlFor="">Senha:</label>
                                    <input
                                        type="senha"
                                        name="senha"
                                        value={cliente.senha}
                                        onChange={(e) => setCliente({ ...cliente, senha: e.target.value })}
                                    />
                                </div>
                                <div className="caixaInput">
                                    <label htmlFor="">Telefone:</label>
                                    <input
                                        type="telefone"
                                        name="telefone"
                                        value={cliente.telefone}
                                        onChange={(e) => setCliente({ ...cliente, telefone: e.target.value })}
                                    />
                                </div>
                                <div className="caixaInput">
                                    <label htmlFor="">Endereço:</label>
                                    <input
                                        type="endereco"
                                        name="endereco"
                                        value={cliente.endereco}
                                        onChange={(e) => setCliente({ ...cliente, endereco: e.target.value })}
                                    />
                                </div>
                            </div>
                            <div className="botoes">
                                <button className="btnAtualizar" type="submit">Atualizar Informações</button>
                                <button className="btnExcluir" onClick={handleExcluir}>Excluir conta</button>
                            </div>
                        </form>
                        {showAlert && <div className="alert">Informações atualizadas com sucesso!</div>}
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Perfil;

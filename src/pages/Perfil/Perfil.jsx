import React, { useState } from 'react';
import livrosLc from "../../assets/livrosLC.jpg";
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import { deleteUsuario } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import '../Perfil/perfil.style.css';

const Perfil = () => {
    const navigate = useNavigate();
    const [usuario, setUsuario] = useState({
        nome: 'thiago souza',
        email: 'thiago@email.com',
        senha: 'senha123',
        telefone: '',
        endereco: '',
    });

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

    const handleExcluirConta = () => {
        const senhaDigitada = prompt('Digite sua senha para confirmar a exclusão da conta:');

        if (senhaDigitada === usuario.senha) {
            deleteUsuario(usuario.id, senhaDigitada)
                .then((exclusaoBemSucedida) => {
                    if (exclusaoBemSucedida) {
                        toast.success('Conta excluída com sucesso!')
                        navigate('/livros');
                    } else {
                        toast.error("Falha ao excluir a conta.");
                    }
                }).catch((erro) => {
                    console.error('Erro ao excluir a conta:', erro);
                });
        } else {
            toast.warning('Senha incorreta. Sua conta não foi excluída.');
        }
    };

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
                        </div>
                        <h2>Seu perfil</h2>
                        <form onSubmit={handleAtualizarInformacoes}>
                            <div className="geralInput">
                                <div className="caixaInput">
                                    <label htmlFor="">Nome de usuário:</label>
                                    <input
                                        type="usuario"
                                        name="nome"
                                        value={usuario.nome}
                                        onChange={(e) => setUsuario({ ...usuario, nome: e.target.value })}
                                    />
                                </div>
                                <div className="caixaInput">
                                    <label htmlFor="">Email:</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={usuario.email}
                                        onChange={(e) => setUsuario({ ...usuario, email: e.target.value })}
                                    />
                                </div>
                                <div className="caixaInput">
                                    <label htmlFor="">Senha:</label>
                                    <input
                                        type="senha"
                                        name="senha"
                                        value={usuario.senha}
                                        onChange={(e) => setUsuario({ ...usuario, senha: e.target.value })}
                                    />
                                </div>
                                <div className="caixaInput">
                                    <label htmlFor="">Telefone:</label>
                                    <input
                                        type="telefone"
                                        name="telefone"
                                        value={usuario.telefone}
                                        onChange={(e) => setUsuario({ ...usuario, telefone: e.target.value })}
                                    />
                                </div>
                                <div className="caixaInput">
                                    <label htmlFor="">Endereço:</label>
                                    <input
                                        type="endereco"
                                        name="endereco"
                                        value={usuario.endereco}
                                        onChange={(e) => setUsuario({ ...usuario, endereco: e.target.value })}
                                    />
                                </div>
                            </div>
                            <div className="botoes">
                                <button className="btnAtualizar" type="submit">Atualizar Informações</button>
                                <button className="btnExcluir" onClick={handleExcluirConta}>Excluir conta</button>
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

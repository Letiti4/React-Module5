// import { useNavigate } from 'react-router-dom'
import livrosLc from "../../assets/livrosLC.jpg"
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import { useState } from 'react';
import '../Perfil/perfil.style.css'
import { deleteUsuario } from "../../services/api";
import { useNavigate } from "react-router-dom"

const Perfil = () => {
    const navigate = useNavigate()
    // const handleClick = () => {
    //     navigate('/livros')
    // }
    const [usuario, setUsuario] = useState({
        nome: 'thiago souza',
        email: 'thiago@email.com',
        senha: 'senha123',
        telefone: '',
        endereco: '',
    });

    const handleAtualizarInformacoes = (e) => {
        e.preventDefault();
        setUsuario({
            nome: e.target.elements.nome.value,
            email: e.target.elements.email.value,
            senha: e.target.elements.senha.value,
            telefone: e.target.elements.telefone.value,
            endereco: e.target.elements.endereco.value,
        });
    };

    const handleExcluirConta = () => {
        const senhaDigitada = prompt('Digite sua senha para confirmar a exclusão da conta:');

        if (senhaDigitada === usuario.senha) {
            deleteUsuario(usuario.id, senhaDigitada)
                .then((exclusaoBemSucedida) => {
                    if (exclusaoBemSucedida) {
                        alert('Conta excluída com sucesso.')
                        navigate('/livros');
                    } else {
                        alert('Falha ao excluir a conta.')
                    }
                }).catch((erro) => {
                    console.error('Erro ao excluir a conta:', erro)
                });
        } else {
            alert('Senha incorreta. A conta não foi excluída.');
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
                                        value={usuario.nome}
                                        onChange={(e) => setUsuario({ ...usuario, nome: e.target.value })}
                                    />
                                </div>
                                <div className="caixaInput">
                                    <label htmlFor="">Email:</label>
                                    <input
                                        type="email"
                                        value={usuario.email}
                                        onChange={(e) => setUsuario({ ...usuario, email: e.target.value })}
                                    />
                                </div>
                                <div className="caixaInput">
                                    <label htmlFor="">Senha:</label>
                                    <input
                                        type="senha"
                                        value={usuario.senha}
                                        onChange={(e) => setUsuario({ ...usuario, senha: e.target.value })}
                                    />
                                </div>
                                <div className="caixaInput">
                                    <label htmlFor="">Telefone:</label>
                                    <input
                                        type="senha"
                                        value={usuario.telefone}
                                        onChange={(e) => setUsuario({ ...usuario, telefone: e.target.value })}
                                    />
                                </div>
                                <div className="caixaInput">
                                    <label htmlFor="">Endereço:</label>
                                    <input
                                        type="senha"
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
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}


export default Perfil
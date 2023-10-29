import livrosLc from "../../assets/livrosLC.jpg";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { toast } from "react-toastify";
import "./Cadastro.styles.css";
import { useForm } from "react-hook-form";
import validator from "validator";
import axios from "axios";

const Cadastro = () => {
    const urlApi = `http://localhost:3000/clientes`;

    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm();

    const onSubmit = async (data) => {
        console.log(data);
        try {
            const dadosCadastro = {
                nome: data.nome,
                email: data.email,
                senha: data.senha,
            };
            console.log(dadosCadastro);
            const response = await axios.post(urlApi, dadosCadastro);
            console.log(response.data);
            alert("Sucesso no Cadastro");
            window.location.href = "/login";
        } catch (error) {
            console.log(error);
        }
    };
    const watchSenha = watch("senha");

    return (
        <>
            <Header />
            <div>
                <div className="containerCadastro">
                    <div className="imagemCadastro">
                        <img src={livrosLc} alt="" />
                    </div>
                    <div className="containerConteudo">
                        <h1 className="tituloCadastro">Cadastro</h1>
                        <div className="containerGeral">
                            <div className="caixaInput">
                                <label htmlFor="nome">Nome</label>
                                <input
                                    {...register("nome", { required: true })}
                                    className={errors?.nome && "erro"}
                                />
                                {errors?.nome?.type === "required" && (
                                    <span className="erro">Por favor, insira seu nome.</span>
                                )}
                                <label htmlFor="">Email:</label>
                                <input
                                    {...register("email", {
                                        required: true,
                                        validate: (value) => validator.isEmail(value),
                                    })}
                                    className={errors?.email && "erro"}
                                />
                                {errors?.email?.type === "required" && (
                                    <span className="erro">Por favor, insira seu email.</span>
                                )}
                                {errors?.email?.type === "validate" && (
                                    <span className="erro">Email inválido.</span>
                                )}
                            </div>
                            <div className="nomesSenhaInput">
                                <div className="caixaInput">
                                    <label htmlFor="">Senha:</label>
                                    <input
                                        {...register("senha", { required: true })}
                                        className={errors?.senha && "erro"}
                                    />
                                    {errors?.senha?.type === "required" && (
                                        <span className="erro">Por favor, insira uma senha.</span>
                                    )}
                                </div>
                                <div className="caixaInput">
                                    <label htmlFor="">Confirmação de Senha:</label>
                                    <input
                                        {...register("confirmarSenha", {
                                            required: true,
                                            validate: (value) => value === watchSenha,
                                        })}
                                        className={errors?.confirmarSenha && "erro"}
                                    />
                                    {errors?.confirmarSenha?.type === "required" && (
                                        <span className="erro">Por favor, confirme sua senha.</span>
                                    )}
                                    {errors?.confirmarSenha?.type === "validate" && (
                                        <span className="erro">As senhas não são iguais.</span>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div>
                            <button className="btnEnviar" onClick={handleSubmit(onSubmit)}>
                                Cadastrar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Cadastro;

import livrosLc from "../../assets/livrosLC.jpg"
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { toast } from "react-toastify";
import './Cadastro.styles.css'
import { useForm } from 'react-hook-form'
import validator from 'validator';
import axios from "axios";

const Cadastro = () => {

    const urlApi = `http://localhost:3000/clientes`;

    const { register, handleSubmit, formState: { errors }, watch } = useForm();

    const onSubmit = async (data) => {
        console.log("aki ", data);
        try {
            const dadosCadastro = {
                nome: data.nome,
                email: data.email,
                senha: data.senha
            };
            console.log(dadosCadastro);
            const response = await axios.post(urlApi, dadosCadastro);
            console.log(response.data);
            alert("Sucesso no Cadastro")
            window.location.href = '/login'
        } catch (error) {
            console.log(error);
        }

    }
    const watchSenha = watch("senha")

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
                            <div className="nomesSenhaInput">
                                <div className="labelSobreInput">
                                    <label htmlFor="nome">Nome</label>
                                    <input
                                        {...register("nome", { required: true })}
                                        className={errors?.nome && "erro"}
                                    />
                                    {errors?.nome?.type === "required" && <span className="erro">Nome é um campo obrigatório</span>}
                                </div>
                            </div>
                            <div className="caixaInput">
                                <label htmlFor="">Email:</label>
                                <input

                                    {...register("email", { required: true, validate: (value) => validator.isEmail(value) })}

                                    className={errors?.email && "erro"}
                                />
                                {errors?.email?.type === "required" && <span className="erro">E-mail é um campo obrigatório</span>}
                                {errors?.email?.type === "validate" && <span className="erro">E-mail inválido</span>}
                            </div>
                            <div className="nomesSenhaInput">
                                <div className="caixaInput">
                                    <label htmlFor="">Senha:</label>
                                    <input

                                        {...register("senha", { required: true })}
                                        className={errors?.senha && "erro"}
                                    />
                                    {errors?.senha?.type === "required" && <span className="erro">Senha é um campo obrigatório</span>}
                                </div>
                                <div className="caixaInput">
                                    <label htmlFor="">Confirmação de Senha:</label>
                                    <input

                                        {...register("confirmarSenha", { required: true, validate: (value) => value === watchSenha })}
                                        className={errors?.confirmarSenha && "erro"}
                                    />
                                    {errors?.confirmarSenha?.type === "required" && <span className="erro">Confirmar Senha é um campo obrigatório</span>}
                                    {errors?.confirmarSenha?.type === "validate" && <span className="erro">Senhas não coincidem</span>}
                                </div>
                            </div>
                        </div>
                        <div>
                            <button className='btnEnviar' onClick={handleSubmit(onSubmit)}>Cadastrar</button>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Cadastro;
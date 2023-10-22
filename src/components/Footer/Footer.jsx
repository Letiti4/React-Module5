import './Footer.styles.css'

const Footer = () => {
    function msgBotao() {
        alert("Mensagem enviada com sucesso!")
    }
    return (
        <section className="footerCaixa">
            <h2>Entre em contato conosco</h2>
            <div className="caixa">
                <form className="formFooter">
                    <div className="formGroup">
                        <label htmlFor="nome" className="formLabel">Nome:</label>
                        <input type="text" id="nome" className="formInput" />
                    </div>
                    <div className="formGroup">
                        <label htmlFor="email" className="formLabel">Email:</label>
                        <input type="email" id="email" className="formInput" />
                    </div>
                    <div className="formGroup">
                        <label htmlFor="mensagem" className="formLabel">Mensagem:</label>
                        <textarea className="formText" id="mensagem" ></textarea>
                    </div>
                    <div className="formGroup">
                        <button className="formEnviar" onClick={msgBotao} >Enviar</button>
                    </div>
                </form>
                <div className="footerInfo">
                    <ul>
                        <li>Endereço: R. Marechal Deodoro, 100 - Curitiba</li>
                        <li>Telefone: (41) 9 9999-9999</li>
                        <li>CNPJ: 15.302.489/0001-01</li>
                        <li>Todos os direitos reservados.</li>
                    </ul>
                </div>
            </div>
            <p>&copy; 2023 Espaço das Letras. </p>
        </section>
    )
}

export default Footer
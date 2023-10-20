// import React from 'react'
import './Footer.styles.css'

const Footer = () => {
    function msgBotao() {
        alert("Mensagem enviada com sucesso!")
    }
    return (
        <section className="footerCaixa">
            <div className="caixa">
                <h2>Entre em contato:</h2>
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
                        <textarea className="formInput" id="mensagem" ></textarea>
                    </div>
                    <div className="formGroup">
                        <button className="formEnviar" onClick={msgBotao} >Enviar</button>
                    </div>
                </form>

                <p>&copy; 2023 Espaço das Letras. </p>
            </div>
        </section>
    )
}

export default Footer
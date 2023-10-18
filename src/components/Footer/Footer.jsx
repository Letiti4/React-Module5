import React from 'react'
import './Footer.styles.css'

const Footer = () => {
    return (
        <section className="footerCaixa">
            <div className="caixa">
                <h2>Entre em contato:</h2>
                <form className="formFooter">
                    <div className="formGroup">
                        <label htmlFor="nome" className="formLabel">Nome:</label>
                        <input type="text" id="nome" className="formInput" placeholder="Digite seu nome" />
                    </div>
                    <div className="formGroup">
                        <label htmlFor="email" className="formLabel">Email:</label>
                        <input type="email" id="email" className="formInput" placeholder="Digite seu email" />
                    </div>
                    <div className="formGroup">
                        <label htmlFor="mensagem" className="formLabel">Mensagem:</label>
                        <textarea className="formInpu   t" id="mensagem" placeholder="Digite sua mensagem"></textarea>
                    </div>
                    <div className="formGroup">
                        <a href="a" className="formEnviar">Enviar</a>
                    </div>
                </form>

                <p>&copy; 2023 Espaço das Letras. </p>
            </div>
        </section>
    )
}

export default Footer
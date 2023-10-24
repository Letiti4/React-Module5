import React from 'react'
import facebook from "../../assets/Logos/facebook.png";
import instagram from "../../assets/Logos/insta.png";
import whatsapp from "../../assets/Logos/whatsapp.png";
import bike from "../../assets/Logos/bike.png";

const FormContato = () => {
    function msgBotao() {
        alert("Mensagem enviada com sucesso!");
    }
    return (
        <div className="infos-site">
            <form className="formFooter">
                <h2>Entre em contato conosco!</h2>
                <div className="formGroup">
                    <label htmlFor="nome" className="formLabel">
                        Nome:
                    </label>
                    <input type="text" id="nome" className="formInput" />
                </div>
                <div className="formGroup">
                    <label htmlFor="email" className="formLabel">
                        Email:
                    </label>
                    <input type="email" id="email" className="formInput" />
                </div>
                <div className="formGroup">
                    <label htmlFor="mensagem" className="formLabel">
                        Mensagem:
                    </label>
                    <textarea className="formText" id="mensagem" rows={10}></textarea>
                </div>
                <div className="formGroup">
                    <button className="formEnviar" onClick={msgBotao}>
                        Enviar
                    </button>
                </div>
            </form>

            <div>
                <div className='bicicleta'>
                    <img className='bike' src={bike} alt="bicicleta" />
                </div>

                <div className="redes-sociais">
                    <a href="#" target="_blank">
                        <img src={instagram} alt="icone do instagram" />
                    </a>
                    <a href="#" target="_blank">
                        <img src={facebook} alt="icone do facebook" />
                    </a>
                    <a href="#" target="_blank">
                        <img src={whatsapp} alt="icone do whatsapp" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default FormContato
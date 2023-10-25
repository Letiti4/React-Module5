import React from 'react'
import { Link } from 'react-router-dom'
import whatsapp from '../../assets/Logos/whatsapp.png'
import insta from '../../assets/Logos/insta.png'
import facebook from '../../assets/Logos/facebook.png'
import email from '../../assets/Logos/email.png'
import './MenuFooter.styles.css'

const MenuFooter = () => {
    return (
        <div className='container-geral'>
            <div className='container-menu-footer'>
                <div className='institucional'>
                    <h3>Institucional</h3>
                    <div>
                        <nav className='menu-institucional'>
                            <Link>Cadastro</Link>
                            <Link>Login</Link>
                            <Link>Pedidos</Link>
                            <Link>Política de Envio</Link>
                        </nav>
                    </div>
                </div>

                <div className='form-assinatura'>
                    <h3>Fique por dentro e saiba das novidades!</h3>
                    <div>
                        <form>
                            <input placeholder='insira seu email aqui*' />
                            <button className='assine-ja'>Assine já</button>
                        </form>
                    </div>

                </div>
                <div className='redes-sociais'>

                    <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>
                        <img src={insta} alt='instagram logo' />
                    </a>
                    <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>
                        <img src={facebook} alt='facebook logo' />
                    </a>
                    <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>
                        <img src={whatsapp} alt='whatsapp logo' />
                    </a>
                    <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>
                        <img src={email} alt='email logo' />
                    </a>

                </div>
            </div>
        </div>
    )
}

export default MenuFooter
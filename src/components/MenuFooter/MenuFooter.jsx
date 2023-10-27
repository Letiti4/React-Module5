import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import whatsapp from '../../assets/Logos/whatsapp.png'
import insta from '../../assets/Logos/insta.png'
import facebook from '../../assets/Logos/facebook.png'
import email from '../../assets/Logos/email.png'
import './MenuFooter.styles.css'

const MenuFooter = () => {

    const handleAssineJaClick = () => {
        toast.success('Você foi incluído na lista! Obrigado por se inscrever!')
    };

    return (
        <div className='container-geral'>
            <div className='container-menu-footer'>
                <div className='institucional'>
                    <h3>Institucional</h3>
                    <div>
                        <nav className='menu-institucional'>
                            {/* INSERIR LINKS DE NAVEGAÇÃO PFV N ESQUECE */}
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
                            <button className='assine-ja' onClick={handleAssineJaClick}>Assine já</button>
                        </form>
                    </div>

                </div>
                <div className='redes-sociais'>

                    <a href=''>
                        <img src={insta} alt='instagram logo' />
                    </a>
                    <a href=''>
                        <img src={facebook} alt='facebook logo' />
                    </a>
                    <a href=''>
                        <img src={whatsapp} alt='whatsapp logo' />
                    </a>
                    <a href=''>
                        <img src={email} alt='email logo' />
                    </a>

                </div>
            </div>
        </div>
    )
}

export default MenuFooter
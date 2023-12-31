import '../Header/header.style.css'
import { Link } from 'react-router-dom'
import Logo from "../../assets/logo.png"

const Header = () => {
    return (
        <section className='headerContainer'>
            <div className='container'>
                <Link to='/'><img src={Logo} alt="Logo do site" /></Link>
                <nav className='nav-linksContainer'>
                    <Link to='/' className='navLinks'>Home</Link>
                    <Link to='/livros' className='navLinks'>Livros</Link>
                    <Link to='/login' className='navLinks'>Login</Link>
                    <Link to='/cadastro' className='navLinks'>Cadastro</Link>
                </nav>
            </div>
        </section>
    )
}

export default Header
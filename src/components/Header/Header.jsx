import '../Header/header.style.css'

const Header = () => {
    return (
        <section className='headerContainer'>
            <div className='container'>
                <a href='#' className='logo'>Espaço<span className='textPrimary'> das Letras</span></a>

                <nav className='nav-linksContainer'>
                    <a href='#' className='navLinks'>Home</a>
                    <a href='#' className='navLinks'>Livros</a>
                </nav>
            </div>
        </section>
    )
}

export default Header
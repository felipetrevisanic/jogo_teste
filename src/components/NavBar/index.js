import { Link } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
    return(
        <nav className='navBar'>
            <Link to='/'><h3>TestTester</h3></Link>
            <div className='links'>
                <Link to='/jogo'><p>Jogar</p></Link>
                <Link to='/resultados'><p>Resultados</p></Link>
                <Link to='/login'><p>Cadastro</p></Link>
            </div>
        </nav>
    )
}

export default NavBar
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div className="headerContainer">
            <nav>
                <Link to="/">Home</Link>
                <Link to="/juegos">Juegos</Link>
                <Link to="/signup">Registrarse</Link>
                <Link to="/signin">Iniciar sesión</Link>
            </nav>

        </div>
        
    )
}

export default Header
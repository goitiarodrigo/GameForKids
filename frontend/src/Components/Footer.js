import { Link } from "react-router-dom"


const Footer = () => {
    return (
        <div className="footerContainer">

            <div className="profilePhoto">
            </div>
            <nav className="footerNav" >
                <Link to="/">Home</Link>
                <Link to="/juegos">Juegos</Link>
                <Link to="/signup">Registrarse</Link>
                <Link to="/signin">Iniciar sesión</Link>
            </nav>
            <p>Todos los derechos reservados Rodrigo Goitia 2021</p>
        </div>
    )
}

export default Footer
import { Link } from "react-router-dom"
import { useState } from "react"
import ModalLog from "./ModalLog"

const Header = () => {

    const [modal, setModal] = useState(false)
    const [typeLog, setTypeLog] = useState(false)

    const handleChangeUp = () => {
        setModal(true)
        setTypeLog(true)
        
    }

    const handleChangeIn = () => {
        setModal(true)
        setTypeLog(false)
        
    }

    return (
        <div className="headerContainer">
            <nav>
                <Link to="/">Home</Link>
                <Link to="/highscore">Highscore</Link>
                <p onClick={handleChangeUp}>Registrarse</p>
                <p onClick={handleChangeIn}>Iniciar sesión</p>
            </nav>

            {modal && <ModalLog setModal={setModal} setTypeLog={setTypeLog} typeLog={typeLog}/>}

        </div>
        
    )
}

export default Header
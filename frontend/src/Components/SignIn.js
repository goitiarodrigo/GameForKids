import { useState } from "react"
import GoogleLogin from 'react-google-login';

const SignIn = ({setTypeLog}) => {

    const [className, setClassName] = useState("")
    const [newUser, setNewUser] = useState(
        {
        email: "",
        password: "",

    })
    


    const responseGoogle = (response) => {
        let newUserWithGoogle = {
            email: response.profileObj.email,
            password: response.profileObj.googleId,
        }       
    }

    const handleNewUser = (e) => {
        setNewUser({
            ...newUser, [e.target.name]:  e.target.value,
        })
        
    }

    const handleChange = () => {
        setClassName("inputContainerSignIn")
        setTimeout(()=>{
            setTypeLog(true)
        }, 590)
        
    }

    return (
        <div className={className}>
            <div  style={{backgroundImage: `url("https://i.postimg.cc/wvWny03P/fondo-Login.png")`}}>
                <input onChange={handleNewUser} type="text" placeholder="Email" name="email" defaultValue={newUser.email}/>
                <input onChange={handleNewUser} type="password" placeholder="Contraseña" name="password" defaultValue={newUser.password}/>
                <span >Iniciar sesión</span>

            </div>
            <div className="buttonGoogle">
                <GoogleLogin
                    clientId="272857405594-vn1j83bm71qbklh33kkboki8vn904evo.apps.googleusercontent.com"
                    buttonText="Iniciar sesión"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                />
            </div>

            <span>No tiene cuenta?, <span onClick={handleChange} style={{fontWeight: "bold", cursor: "pointer"}}> registrese</span></span>
        </div>
        
    )
}

export default SignIn
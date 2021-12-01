import { useState } from "react"
import GoogleLogin from 'react-google-login';

const SignUp = ({setTypeLog}) => {

    const [className, setClassName] = useState("")
    const [newUser, setNewUser] = useState(
        {name: "",
        email: "",
        password: "",
        photoProfile: "",

    })


    const responseGoogle = (response) => {
        let newUserWithGoogle = {
            name: response.profileObj.givenName,
            email: response.profileObj.email,
            password: response.profileObj.googleId,
            photoProfile: response.profileObj.imageUrl,
            google: true,
        }       
    }

    const handleNewUser = (e) => {
        setNewUser({
            ...newUser, [e.target.name]: e.target.name === "photoProfile" ? e.target.files[0] : e.target.value,
        })
        
    }

    const handleEnterNewUser = () => {
        const FD = new FormData()
        FD.append("name", newUser.name)
        FD.append("email", newUser.email)
        FD.append("password", newUser.password)
        FD.append("photoProfile", newUser.photoProfile)
    }

    const handleChange = () => {
        setClassName("inputContainerSignUp")
        setTimeout(() => {
            setTypeLog(false)
        }, 590);
    }

    return (
        <div className={className}>
            <div  style={{backgroundImage: `url("https://i.postimg.cc/wvWny03P/fondo-Login.png")`, paddingTop: "6rem"}}>
                <input onChange={handleNewUser} type="text" placeholder="Nombre" name="name" defaultValue={newUser.name}/>
                <input onChange={handleNewUser} type="text" placeholder="Email" name="email" defaultValue={newUser.email}/>
                <input onChange={handleNewUser} type="password" placeholder="Contraseña" name="password" defaultValue={newUser.password}/>
                <input  type="password" placeholder="Repita contraseña"/>
                <label className="labelInput" htmlFor="inputPhoto">
                    Subir foto
                </label>
                <input onChange={handleNewUser} id="inputPhoto" className="inputPhoto" type="file" placeholder="Foto de perfil" name="photoProfile" defaultValue={newUser.photoProfile}/>
                <span onClick={handleEnterNewUser}>Registrarse</span>

            </div>
            <div className="buttonGoogle">
                <GoogleLogin
                    clientId="272857405594-vn1j83bm71qbklh33kkboki8vn904evo.apps.googleusercontent.com"
                    buttonText="Registrarse"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                />
            </div>

            <span>Ya tiene cuenta?, <span onClick={handleChange} style={{fontWeight: "bold", cursor: "pointer"}}> inicie sesión</span></span>
        </div>
        
    )
}

export default SignUp
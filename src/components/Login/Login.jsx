import { useRef } from "react";
import './Login.css'
import github from '../../assets/github.png'
import google from '../../assets/google.png'
import { Link } from "react-router-dom";
import { Signup } from "../Signup/Signup";

export const Login = () => {
    const datForm = useRef()
    
    const formConsulter = (e) => {
        e.preventDefault()

        const newForm = new FormData(datForm.current)
        const client = Object.fromEntries(newForm)

        console.log(client)
        fetch('http://localhost:4000/api/sessions/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(client)
        })
        .then(response => response.json())
        .catch(error => console.error(error))

        e.target.reset()
    }

    return (
       <>
       <main className="centerLogin">
        <form className='form' onSubmit={formConsulter} ref={datForm}>
                <p className='title'>INICIA SESIÓN:</p>
                <label>Email:</label>
                <input className='inputLogin'  type='email' name="email" ></input>
                <label>Contraseña:</label>
                <input className='inputLogin' type='password' name="password"  ></input>
                <button type="submit" className="btn btn-primary submit">LOGIN</button>
               
                <p className="toSignup"> ¿No tienes una cuanta?<Link to='/signup'>Registrate</Link></p>
                
                <p className="or">O</p>
                <div className="alinear">
                    <button className="smbtn" onClick={() => {
                        const popup = window.open('http://localhost:4000/api/sessions/githubSignup')}}>
                            <img src={github} className="icon"/>
                            Github
                    </button>

                    <button className="smbtn" onClick={() => {
                        const popup = window.open('http://localhost:4000/api/sessions/githubSignup')}}>
                            <img src={google} className="icon"/>
                            Google
                    </button>
                </div>
            </form>
       </main>
       </>
    )
}


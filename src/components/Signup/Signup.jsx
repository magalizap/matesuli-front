import { useRef } from "react";
import { Link } from "react-router-dom";
import Github from '../../assets/github.png'
import Google from '../../assets/google.png'

export const Signup = () => {
    const datForm = useRef()

    const formConsulter = (e) => {
        e.preventDefault()

        const newForm = new FormData(datForm.current)
        const client = Object.fromEntries(newForm)

        console.log(client)
        fetch('http://localhost:4000/api/sessions/signup', {
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

    const github = () => {
        window.open('http://localhost:4000/api/sessions/githubSignup', '_self')
    }

    const google = () => {
        window.open('http://localhost:4000/api/sessions/googleSignup', '_self')
    }

    return(
        <>
    <main className="centerLogin">

        <form className='form' onSubmit={formConsulter} ref={datForm}>
        <p className='title'>FORMULARIO REGISTRO:</p>


            <label>Nombre:</label>
            <input className='inputLogin'  type='text'  name="first_name" ></input>

            <label>Apellido:</label>
            <input className='inputLogin'  type='text'  name="last_name" ></input>

            <label>Email:</label>
            <input className='inputLogin'  type='email' name="email" ></input>

            <label>Contraseña:</label>
            <input className='inputLogin'  type='password' name="password"  ></input>
            <button type="submit" className="btn btn-primary submit">Registrar</button>
            <p className="toSignup"> ¿No tienes una cuanta?<Link to='/login/'>Inicia sesión</Link></p>

            <p className="or">O</p>
                <div className="alinear">
                    <button className="smbtn" onClick={github}>
                            <img src={Github} className="icon"/>
                            Github
                    </button>

                    <button className="smbtn" onClick={google}>
                            <img src={Google} className="icon"/>
                            Google
                    </button>
                </div>
        </form>
      </main>      
    </>
    )
}
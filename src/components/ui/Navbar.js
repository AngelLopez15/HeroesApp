import React, { useContext } from 'react'
import {Link, useHistory} from 'react-router-dom'

import img from '../../superheroe.svg'
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types/types'

export const Navbar = () => {

    // Funcion para hacer funcionar el menú responsive 
    const hidden = () =>{
        const menu = document.querySelector('#navbarSupportedContent');
        menu.classList.toggle('none')
    }

    // Debemos extraer el Context para usarlo
    // desestructuramos el user del Context y obtenemos el valor de la propiedad name
    const {user:{name}, dispatch} = useContext(AuthContext)

    // Funcion para manejar el Logout
    // Pra manejar el logout primero debemos extraer el Context para usarlo
    // extraemos el dispatch para enviar informacion al reducer
    // const {dispatch} = useContext(AuthContext)

    // Para que el boton de Logout nos regrese a la pantalla de Login no es tan facil
    // esto sucede por que el Navbar solo es un componenete que no se encuentra dentro
    // de los Ruoters por lo tanto no tiene acceso a la propiedad Histori de los Routers
    // y esto impide que pueda ir a la pantalla de Login al presionarlo. Ya que estamos
    // haciendo esto -> undefined.replace(/login) por eso nos marca un error.
    // Para arreglar este problema podemos hacer uso de los Hooks que React-dom ya trae 
    // implementado. Al ver el Arbol de componenetes podemos notar que existe uno que se llama
    // Router.Provider provider lo que hace es como su nombre nos indica proveer
    // propiedades a traves del arbol de componentes y es asi como vamos a obtener el history
    
    // ocupamos el hook useHistory de React-router
    const history = useHistory ()

    const handleLogout=()=>{

        const action = {
            type:types.logout,
        }
        
        dispatch(action)

        history.replace('/login')
    }

    return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/"><img src={img} alt="logo" className="logo" />HeroesApp</Link>
        <button 
            className="navbar-toggler" 
            type="button" 
            data-toggle="collapse" 
            data-target="#navbarSupportedContent" 
            aria-controls="navbarSupportedContent" 
            aria-expanded="false"
            onClick={hidden} 
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto">
                <li className="nav-item">
                    <Link className="nav-link" to="/serch">Buscar</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/marvel">Marvel</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/dc">DC</Link>
                </li>
            </ul>
            <p className="mb-0 pl-0 nav-item nav-link text-info">!Hola, {name}¡</p>
            <button 
                className="btn btn-outline-success my-2 my-sm-0"
                onClick={handleLogout}
            >Logout</button>
        </div>
    </nav>
    )
}


import React, { useContext } from 'react'
import { types } from '../../types/types'
import { AuthContext } from '../../auth/AuthContext'

// history para poder extraer las propiedades que ya viene con el router
export const LoginScreen = ({history}) => {

  // Debemos extraer el Context para usarlo
  // extraemos el dispatch
  const {dispatch} = useContext(AuthContext)
  
  const handleLogin =()=>{
    
    // con esto vamos a poder recuperar la ultima ruta visitada en nuestra app
    // o en caso de que sea la primera vez que entra o el localStorage fue borrado
    // entonces hay que direccionarlo al '/'
    const lastPath = localStorage.getItem('lastPath') || '/'

    // Con push vamos a la ruta que le indicamos y se guarda la pagina anterior en el historial
    // history.push('/')
    // Con replace vamos a la ruta que le indicamos y no se guarda la pagina anterior en el historial
    // history.replace('/')
    
    const action = {
      type:types.login,
      payload:{
        name:'Superamigo'
      }
    }
    
    dispatch(action)
    
    // Aqui ponemos la ultima ruta visitada. Esto por que si el usuario quiere
    // entrar a una ratu protegida y no esta logeado no lo dejara entrar
    // sin enbargo ya tendremos guardado en localStorage la ruta y asi cuando 
    // el usuario se loggee lo llevara directamente a la pagina que queria
    history.replace(lastPath)

    // Esta es la forma de corta de hacerlo sin tener que crear el action
    // dispatch({
    //   type:types.login,
    //   payload:{
    //     name:'Superamigo'
    //   }
    // })

  }

  return (
    <div className="container text-center">
      <h1 className="display-2 mt-5">Login Screen</h1>
      <hr className="pb-5" />
      <button
        type="button" 
        className="btn btn-outline-dark btn-lg"
        onClick={handleLogin}
      >
        Login
      </button>
    </div>
  )
}

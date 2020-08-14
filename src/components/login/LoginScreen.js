import React, { useContext } from 'react'
import { types } from '../../types/types'
import { AuthContext } from '../../auth/AuthContext'

// history para poder extraer las propiedades que ya viene con el router
export const LoginScreen = ({history}) => {

  // Debemos extraer el Context para usarlo
  // extraemos el dispatch
  const {dispatch} = useContext(AuthContext)
  
  const handleLogin =()=>{
    
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
    
    history.replace('/')

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

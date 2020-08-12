import React from 'react'

// history oara poder extraer las propiedades que ya viene con el router
export const LoginScreen = ({history}) => {

  const handleLogin =()=>{
    
    // Con push vamos a la ruta que le indicamos y se guarda la pagina anterior en el historial
    // history.push('/')
    // Con replace vamos a la ruta que le indicamos y no se guarda la pagina anterior en el historial
    // history.replace('/')
    history.replace('/')

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

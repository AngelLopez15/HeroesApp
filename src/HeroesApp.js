import React, { useReducer, useEffect } from 'react'
import { AppRouter } from './routers/AppRouter'
import './index.css'
import { AuthContext } from './auth/AuthContext'
import { authReducer } from './auth/authReducer'

// creando el estado inicial cuando se usa localstorage
const init = () =>{
  // revisar el localstorage para encontrar el estado inicial y si no lo encuentra
  // regresar el estado inicial como false
  return JSON.parse(localStorage.getItem('user')) || {logged:false}

}


export const HeroesApp = () => {

  // Creando un useReducer que vamos a mandar como value del AuthContext 
  // y es lo que se va distribuir a toda la app
  // Con esto ahora tenemos la posibilidad de hacer dispatch y obtener el user
  // a lo largo de toda la aplicacion
  const [user, dispatch] = useReducer(authReducer, {}, init)

  // implementando useEffect para guardar el user en el localStorage
  // Para guardar los datos en localStorage
  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user))
  }, [user])

  return (
    <AuthContext.Provider value={{user, dispatch}}>
      <AppRouter />
    </AuthContext.Provider>
  )
}

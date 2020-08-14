import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import PropTypes from 'prop-types';

// Este componente va a ser el encargado de verificar si el usuario esta
// autentificado o no. Para de esta menera proteger las rutas y que no se
// pueda entrar directamente si el usuario se sabe el url

export const PrivateRoute = ({
  // vamos a recibir propiedades para saber la autentificacion
  isAuthenticated,
  // NEcesitamos recibir el componenete que queremos renderizar
  component:Component,
  // las demas argumentos lo recuperamos con el operador rest ya que no las ocuparemos
  // pero otros componentes si entonces esto es solo como un puente
  ...rest
}) => {

  // grabamos en el local estorage la ultima ruta visitada. Esto es posible gracias
  // a las propiedades location y pathname del react route
  localStorage.setItem('lastPath', rest.location.pathname)

  return (
    <Route {...rest}
      // hacer la validacion renderizar el componenete o no
      component={(props)=>(
        // hacemos el ternario si el usuario esta autentificado entonces renderizamos
        // el componente caso contrario lo redireccionamos al login
        (isAuthenticated) ? (<Component {...props}/>) : (<Redirect to="/login" />)
      )}
    />
  )
}

PrivateRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired
}
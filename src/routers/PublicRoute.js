import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import PropTypes from 'prop-types';

export const PublicRoute = ({
  isAuthenticated,
  component:Component,
  ...rest
}) => {
  
  return (
    <Route {...rest}
      component={(props)=>(
        // hacemos el ternario si el usuario NO esta autentificado entonces renderizamos
        // el componente actual en el que esta que es el de login
        // Si el usuario SI esta autentificado entonces lo redireccionamos al /
        // Esto para que el usuario que ya esta autentificado NO pueda entrar a la pantalla
        // de login ya sea escribiendo la url o regresando con el boton atras 
        (!isAuthenticated) ? (<Component {...props}/>) : (<Redirect to="/" />)
      )}
    />
  )
}

PublicRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired
}
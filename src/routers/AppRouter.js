import React, { useContext } from 'react'
import {
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import { LoginScreen } from '../components/login/LoginScreen';
import { DashBoardRoutes } from './DashBoardRoutes';
import { PrivateRoute } from './PrivateRoute';
import { AuthContext } from '../auth/AuthContext';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {

  // como necesitamos enviar el valor booleano del user
  // entonces debemos traer el Context
  const {user} = useContext(AuthContext)

  return (
    <Router>
      <div>
        <Switch>
          {/* <Route ..../> <-Asi se usa cuando no protejemos las rutas*/}
          <PublicRoute 
            exact path="/login" 
            component={LoginScreen} 
            isAuthenticated={user.logged}
          />

          {/* esta es la ruta que queremos proteger por lo tanto es a esta
          a la que debemos aplicar el PrivateRuter */}
          <PrivateRoute 
            path="/" 
            component={DashBoardRoutes}  
            isAuthenticated={user.logged}
          />
        </Switch>
      </div>
    </Router>
  )
}

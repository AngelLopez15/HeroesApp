// Creando nuestro reducer para hacer autentificación
// Recordar que los reducer no son mas que simples funciones de JS

import { types } from "../types/types";

// recordar que los reducer reciben como argumentos el estado y un action

export const authReducer = (state={}, action) => {
  
  // los reducer usualmente siempre se manejan con un switch

  switch (action.type) {
    case types.login:
      return{
        ...action.payload,
        logged:true
      }
    case types.logout:
      return{
        logged:false
      }
    default:
      return state
  }


}

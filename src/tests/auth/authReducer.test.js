
// Este es el estado al pasar la accion
// const state = { 
//   name:'Angel',
//   logged:true
// }

const { authReducer } = require("../../auth/authReducer");
const { types } = require("../../types/types");

describe('Pruebas en authReducer', () => {
  
  test('Debe de retornar el estado por default', () => {
    
    const state = authReducer({logged:false},{})
    expect(state).toEqual({logged:false})

  })
  
  test('Debe de autenticar y colocar el name de usuario', () => {
    
    const action = {
      type:types.login,
      payload:{
        name:'Octavio'
      }
    }
    
    const state = authReducer({logged:false},action)
    expect(state).toEqual({
      logged:true,
      name:'Octavio'
    })

  });

  test('Debe de borrar el name del usuario y el logged en false', () => {
    
    const action = {
      type:types.logout
    }
    
    const state = authReducer({logged:true, name:'Angel'},action)
    expect(state).toEqual({logged:false})

  });

})

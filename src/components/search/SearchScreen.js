import React, { useMemo } from 'react'
import queryString from 'query-string'

import { HeroCard } from '../heroes/HeroCard'
import { useForm } from '../../hooks/useForm'
import { useLocation } from 'react-router-dom'
import { getHeroesByName } from '../../selectors/getHeroesByName'

// necesitamos desestructurar history para para ocupar sus metodos 
// y hacer uso de los query strings

export const SearchScreen = ({history}) => {

  // usando el hook location de reac-dom para manejar el querystring
  const location = useLocation()

  // intalar npm i query-string para poder parsear los query string
  // desestructurando el query "q" que es lo unico que nos interesa de toda la cadena
  // Lo igualamos a un string vacio para que no de un error si no se envia nada
  const {q = ''} = queryString.parse(location.search)

  // NOTA: Para que el hook useForm funcione es indispensable que el input
  // tenga la propiedad "name"
  const [{description}, handleInputChange, reset] = useForm({
    description: ''
  })
  
  // usando el useMemo para que la busqueda solo se renderice al enviar el querystring
  const heroesFilter = useMemo(() => getHeroesByName(q), [q])

  const handleSubmit = (event) =>{
    event.preventDefault()
    if(description.trim().length <=1){
      return
    }
    // console.log(description)
    history.push(`?q=${description}`)
    reset()
  }

  return (
    <div>
      <h1 className="mt-5 display-3">Search Screen</h1>
      <hr className="pb-5" />
      <div className="row">
        <div className="col-md-5">
          <p className="h2 pb-3">Buscador</p>
          <hr className="pb-3" />
          <form
            onSubmit={handleSubmit}
          >
            <input 
              type="text" 
              placeholder="Busca tu héroe" 
              className="form-control mb-4"
              autoComplete="off"
              name="description"
              value={description}
              onChange={handleInputChange}
            />
            <button
              type="submit"
              className="btn btn btn-outline-dark btn-block btn-lg"
            >
              Buscar
            </button>
          </form>
        </div>
        <div className="col-md-7">
          <p className="h2 pb-3">Resultados</p>
          <hr className="pb-3" />

          {
            (q==='') &&
            <div className="alert alert-info">
              busca un héroe
            </div>
          }
          
          {
            (q !=='' && heroesFilter.length=== 0 ) &&
            <div className="alert alert-danger">
              El héroe {q} no existe
            </div>
          }

          {
            heroesFilter.map(hero=>(
              <HeroCard 
                key={hero.id}
                {...hero}
              />
            ))
          }
        </div>
      </div>
    </div>
  )
}

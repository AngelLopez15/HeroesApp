import React, { useMemo } from 'react'
import { useParams, Redirect } from 'react-router-dom'
import { getHeroesById } from '../../selectors/getHeroById'

export const HeroesScreen = ({history}) => {

  // Para extraer los parametros que vengan en el url
  // const params=useParams()
  // console.log(params)

  const {heroeId}=useParams()

  // const hero= getHeroesById(heroeId)
  // reemplazamos la linea de arriba por el useMemo 
  const hero= useMemo(() => getHeroesById(heroeId), [heroeId])


  // validando que sea una url valida y si no lo es que direccione a la pagina inicial
  if (!hero) {
    return <Redirect to="/" />
  }

  const handleReturn = () =>{
    // validar por si llevamos directamente a un url en especifico
    // el botos de regresar no nos saque de la aplicacion
    if (history.length<=2) {
      history.push('/')
    } else {
      history.goBack()
    }
  }

  // desestructurando las propiedades de los heroes
  const {superhero, publisher, alter_ego,first_appearance, characters} = hero

  return (
    <div className="row mt-5">
      <div className="col-12 col-md-4">
        <img src={`../assets/heroes/${heroeId}.jpg`} alt={superhero} className="img-thumbnail animate__animated animate__backInDown" />
      </div>
      <div className="col-12 col-md-8">
        <h1 className="display-2">{superhero}</h1>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"><span className="font-weight-bold">Alter ego: </span>{alter_ego}</li>
          <li className="list-group-item"><span className="font-weight-bold">Compañia: </span>{publisher}</li>
          <li className="list-group-item"><span className="font-weight-bold">Primera aparición: </span>{first_appearance}</li>
        </ul>
        <p className="h3 mt-4">Personas que han sido este heroé:</p>
        <p className="lead mt-3">{characters}</p>
        <button className="btn btn-outline-dark btn-lg" onClick={handleReturn}>Regresar</button>
      </div>
    </div>
  )
}

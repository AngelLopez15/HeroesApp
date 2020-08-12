import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher'
import { HeroCard } from './HeroCard'

export const HeroesList = ({publisher}) => {

  // const heroes = getHeroesByPublisher(publisher)

  // Reemplazamos la linea de arriba por el useMemo ya que esto optimiza
  // el rendimiento de la app ya que esta funcion solo se deberia de llamar solo
  // si el publisher cambia y no cuando el state o el componenete se renderiza
  // esto es bueno hacer si nuestro proceso es muy pesado.
  // entre los [ ] debemos poner las dependecias es decir cuando haya cambias en
  // esa dependencia es cuando debe de memorizar otra vez
  const heroes= useMemo(() => getHeroesByPublisher(publisher), [publisher])

  return (
    <div className="card-columns animate__animated animate__bounceInRight">
      {
        heroes.map(hero=>(
          <HeroCard
            key={hero.id}
            {...hero}
          /> 
        ))
      }
    </div>
  )
}

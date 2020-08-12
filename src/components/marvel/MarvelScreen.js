import React from 'react'
import { HeroesList } from '../heroes/HeroesList'

export const MarvelScreen = () => {

  return (
    <div>
      <h1 className="mt-5 display-3">Marvel Screen</h1>
      <hr className="pb-5" />
      <HeroesList 
        publisher="Marvel Comics"
      />
    </div>
  )
}

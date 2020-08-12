import React from 'react'
import { HeroesList } from '../heroes/HeroesList'

export const DcScreen = () => {

  return (
    <div>
      <h1 className="mt-5 display-3">DC Screen</h1>
      <hr className="pb-5" />
      <HeroesList 
        publisher="DC Comics" 
      />

    </div>
  )
}

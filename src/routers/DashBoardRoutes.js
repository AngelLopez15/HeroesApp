import React from 'react'
import { Navbar } from '../components/ui/Navbar'
import { Switch, Route, Redirect } from 'react-router-dom'
import { MarvelScreen } from '../components/marvel/MarvelScreen'
import { HeroesScreen } from '../components/heroes/HeroesScreen'
import { DcScreen } from '../components/dc/DcScreen'

export const DashBoardRoutes = () => {
  // Se crea un segundo router para manejar las rutas hijas
  return (
    <>
      <Navbar />

      <div className="container">
        <Switch>
          <Route exact path="/marvel" component={MarvelScreen} />
          <Route exact path="/hero/:heroeId" component={HeroesScreen} />
          <Route exact path="/dc" component={DcScreen} />

          <Redirect to="/marvel" />
        </Switch>
      </div>
    </>
  )
}

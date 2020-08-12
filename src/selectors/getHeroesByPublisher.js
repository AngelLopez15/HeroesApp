import { heroes } from "../data/heroes"

export const getHeroesByPublisher=(publisher)=>{

  // validando que el usuario escriba las unicas opciones que tenemos
  const validPublishers=['DC Comics', 'Marvel Comics']

  if (!validPublishers.includes(publisher)) {
    throw new Error(`Publisher "${publisher}" no es correcto`)
  }

  return heroes.filter(hero=>hero.publisher===publisher)
} 
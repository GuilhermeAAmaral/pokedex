import { useState } from 'react';
import {Switch,Route,BrowserRouter} from 'react-router-dom'
import DetailPokemons from '../componentes/DetailPokemons.js';
import Home from "../componentes/Home";
import Pokedeks from '../componentes/Pokedeks.js';


const Rotas= () =>{

const[pokedex,setPokedex]= useState([])
  
const addPokedex = (poke) => {

  const isPokemonPokedex = pokedex.find ((pokemonPokedex) => {
    if (pokemonPokedex.name === poke.name) {

      return true

    } else {
      return false
    }
  })

  if (isPokemonPokedex) {

    const novoArray = pokedex.map ((pokemonPokedex) => {

      if (pokemonPokedex.name === poke.name) {
        const novoPokemon = {...pokemonPokedex, quantity: pokemonPokedex.quantity +1
        } 
        return novoPokemon
      }
      return pokemonPokedex
    })
    setPokedex (novoArray)

  } else {
    const novoPokemon= {...poke, quantity: 1}
    const novoArray=[...pokedex,novoPokemon]
    setPokedex(novoArray)
  }

}

const removePokedex = (poke) => {
  let novoPokemon = pokedex.map((pokemonPokedex) => {
    if (pokemonPokedex.name === poke.name) {
      const novoArray = {...pokemonPokedex, quantity: pokemonPokedex.quantity -1 
      }
      return novoArray
    }
    return pokemonPokedex
  })

  novoPokemon = novoPokemon.filter ((pokemonPokedex) => {
    if (pokemonPokedex.quantity < 1) {
      return false
    } else {
      return true
    }
  })
  setPokedex(novoPokemon)
}


   return(
    <BrowserRouter>
     <Switch>

       <Route exact path="/">
        <Home addPokedex={addPokedex} />
       </Route>

       <Route exact path="/Pokedeks">
        <Pokedeks pokedex={pokedex} removePokedex={removePokedex} />
       </Route>
      
       <Route exact path="/DetailPokemons/:nome">
         <DetailPokemons/>
       </Route>
  
      <Route>
        <p>Pagina não encontrada ;(</p>
      </Route>
     </Switch>
    </BrowserRouter>
   )
}
export default Rotas;
import React from 'react'
import styled from 'styled-components'
import {useHistory} from 'react-router-dom'
import CardPokedex from './CardPokedex'

const Header = styled.div`
display: flex;
justify-content: space-evenly;
background-color: #649BD9; 
padding: 10px;
color: white;
text-align: center;
margin-bottom: 30px;
align-items: center;
`
const ContainerPrincipal = styled.div `
display: grid;
grid-template-columns: 1fr 1fr 1fr;
`

const ButtonPokeDex = styled.div`
background-color: #649BD9;
border-bottom: 3px solid #E35C3C;
padding: 3px;
color: white;
margin: 20px;
cursor: pointer;
`

function Pokedex (props) {

  const history=useHistory()

  const voltarPaginaAnterior=()=>{
    history.goBack()
  }
  const irParaDetalhesDoPokemon=(name)=>{
    history.push(`/DetailPokemons/${name}`)
  }
  

  const mostrarNaPokedex = props.pokedex.map ((poke) => {
    return <CardPokedex removePokedex={props.removePokedex} poke={poke} irParaDetalhesDoPokemon={() => irParaDetalhesDoPokemon(poke.name)}/>
  })

    return (
  
      <div>
        
        <Header>
          <h1>Pokedex</h1>
          <ButtonPokeDex onClick={voltarPaginaAnterior}>Voltar para lista de Pokemons</ButtonPokeDex>
        </Header>

        <ContainerPrincipal>

          {mostrarNaPokedex}
                    
        </ContainerPrincipal>

      </div>
     
    );
}
  
  export default Pokedex;
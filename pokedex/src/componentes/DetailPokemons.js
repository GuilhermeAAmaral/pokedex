import React from 'react'
import styled from 'styled-components';
import {useHistory,useParams} from "react-router-dom"
import useRequestData from '../hooks/useRequestData';


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
const CardPoderes = styled.div`
border: 1px solid #649BD9; 
box-shadow: 1px 0px 3px 0px #649BD9;
border-radius: 20px;
width: 350px;
height: 450px;
margin: 35px;
`
const CardAtaques = styled.div`
border: 1px solid #649BD9; 
box-shadow: 1px 0px 3px 0px #649BD9;
border-radius: 20px;
width: 350px;
height: 450px;
margin: 35px;
align-items: center;
justify-content: center;
text-align: center;
`
const CardPokemonsImg = styled.div`
border: 1px solid #649BD9; 
box-shadow: 1px 0px 3px 0px #649BD9;
border-radius: 20px;
text-align:center;
width: 350px;
height: 450px;
margin: 35px;
align-items: center;
justify-content: center;
`
const ButtonPokeDex = styled.div`
background-color: #649BD9;
border-bottom: 3px solid #E35C3C;
padding: 3px;
color: white;
margin: 20px;
cursor: pointer;
`
const Text = styled.p`
padding: 10px;
text-align: center;
`
const Titulos = styled.h1`
text-align: center;
color: #E35C3C;
padding: 15px;
`
const Img = styled.img `
width: 200px;
`

function DetailPokemons () {

const history = useHistory()
const params=useParams()

const voltarPaginaAnterior=()=>{
  history.goBack()
}

const detalhesPokemon= useRequestData(`https://pokeapi.co/api/v2/pokemon/${params.nome}`,{})

const statsHp = detalhesPokemon.stats && detalhesPokemon.stats[0]
const statsAtk = detalhesPokemon.stats && detalhesPokemon.stats[1] 
const statsDef = detalhesPokemon.stats && detalhesPokemon.stats[2] 
const statsAtkEsp = detalhesPokemon.stats && detalhesPokemon.stats[3]
const statsDefEsp = detalhesPokemon.stats && detalhesPokemon.stats[4]
const statsVel = detalhesPokemon.stats && detalhesPokemon.stats[5]

const move1 = detalhesPokemon.moves && detalhesPokemon.moves[1]
const move2 = detalhesPokemon.moves && detalhesPokemon.moves[2]
const move3 = detalhesPokemon.moves && detalhesPokemon.moves[3]
const move4 = detalhesPokemon.moves && detalhesPokemon.moves[4]
const move5 = detalhesPokemon.moves && detalhesPokemon.moves[5]

const type1 = detalhesPokemon.types && detalhesPokemon.types[0]
const type2 = detalhesPokemon.types && detalhesPokemon.types[1]


    return (
  
      <div>
                
        <Header>
          <h1>{detalhesPokemon.name && detalhesPokemon.name}</h1>
          <ButtonPokeDex onClick={voltarPaginaAnterior}>Voltar</ButtonPokeDex>
        </Header>

        <ContainerPrincipal>
            <CardPokemonsImg>
              <Text><Img src={detalhesPokemon.sprites && detalhesPokemon.sprites.front_default} alt="é um pokemon"/></Text>
              <Text><Img src={detalhesPokemon.sprites && detalhesPokemon.sprites.back_default} alt="é um pokemon"/></Text>
            </CardPokemonsImg>

            <CardPoderes>
              <Titulos>Poderes</Titulos>
              <Text><strong>Hp:</strong> {statsHp && statsHp.base_stat}</Text>
              <Text><strong>Ataque:</strong> {statsAtk && statsAtk.base_stat}</Text>
              <Text><strong>Defesa:</strong> {statsDef && statsDef.base_stat}</Text>
              <Text><strong>Especial-ataque:</strong> {statsAtkEsp && statsAtkEsp.base_stat}</Text>
              <Text><strong>Especial-defesa:</strong> {statsDefEsp && statsDefEsp.base_stat}</Text>
              <Text><strong>Velocidade:</strong> {statsVel && statsVel.base_stat}</Text>
            </CardPoderes>

            <CardAtaques>
              <Titulos>Principais habilidades</Titulos>
              <Text>{move1 && move1.move.name}</Text>
              <Text>{move2 && move2.move.name}</Text>
              <Text>{move3 && move3.move.name}</Text>
              <Text>{move4 && move4.move.name}</Text>
              <Text>{move5 && move5.move.name}</Text>
          
              <Titulos>Tipo</Titulos>
                <Text>{type1 && type1.type.name}</Text>
                <Text>{type2 && type2.type.name}</Text>
            </CardAtaques>
              
        </ContainerPrincipal>

      </div>
     
    );
}
  
  export default DetailPokemons;
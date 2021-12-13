
import styled from 'styled-components';
import {useHistory} from "react-router-dom"
import useRequestData from '../hooks/useRequestData';
import CardPokemon from './Cardpokemon';

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

function Home (props) {

const history= useHistory()

const irParaPokedexs=()=>{
    history.push("/Pokedeks")
}
const irParaDetalhesDoPokemon=(name)=>{
    history.push(`/DetailPokemons/${name}`)
}

const pokemonLista= useRequestData('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0',{})


const pokemons=pokemonLista.results?.map((poke)=>{
    return <CardPokemon poke={poke}
    irParaDetalhesDoPokemon={()=> irParaDetalhesDoPokemon(poke.name)}
    addPokedex={props.addPokedex}
    />
})

    return (
  
    <div> 

        <Header>
            <h1>Lista de Pokemons</h1>
            <ButtonPokeDex onClick={irParaPokedexs}>Ir para Pokedexs</ButtonPokeDex>
        </Header>
        
        <ContainerPrincipal>
            {pokemons}
        </ContainerPrincipal>
     

    </div>   
     
    );
}
  
export default Home;
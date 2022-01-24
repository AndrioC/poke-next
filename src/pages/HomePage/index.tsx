import type { NextPage } from 'next'
import Image from 'next/image'
import pokeballImage from '../../assets/images/pokeball.png'
import {
  TitleContainer,
  PokemonContainer,
} from './styles'

interface Props{
  pokemons: {
    id: number;
    name: string;
    url: string;
  }[]
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
  return (
    <>
      <TitleContainer>
        <h1>Poke<span>Next</span></h1>
        <Image src={pokeballImage} width="50" height="50" alt="PokeNext" />
      </TitleContainer>
      <PokemonContainer>
        {pokemons.map((pokemon) => (
          <p key={pokemon.id}>{pokemon.name}</p>
        ))}
      </PokemonContainer>
    </>
  )
}

export default HomePage

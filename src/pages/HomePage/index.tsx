import type { NextPage } from 'next'
import Image from 'next/image'
import pokeballImage from '../../assets/images/pokeball.png'
import Card from '../../components/Card'
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
          <Card key={pokemon.id} pokemon={pokemon} />
        ))}
      </PokemonContainer>
    </>
  )
}

export default HomePage

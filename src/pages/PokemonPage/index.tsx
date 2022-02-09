import type { NextPage } from 'next'
import Image from 'next/image'
import {
  PokemonContainer,
  PokemonType,
  SpanType,
  PokemonInfo,
  PokemonDataHeight,
  PokemonDataWeight,
} from './styles'

interface Props{
  pokemon: {
    id: string;
    name: string;
    types: {
      type: {
        name: string;
      }
    }[]
    height: number;
    weight: number;
  }
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {
  return (
    <PokemonContainer>
      <h1>{pokemon.name}</h1>
      <Image 
        src={`${process.env.NEXT_PUBLIC_CDN_URL}/${pokemon.id}.png`}
        width="200"
        height="200"
        alt={pokemon.name}
      />
      <div>
        <h3>Number:</h3>
        <p>#{pokemon.id}</p>
      </div>
      <div>
        <h3>Type:</h3>
        <PokemonType>
          {pokemon.types.map((item, index) => (
            <SpanType type={item.type.name} key={index}>{item.type.name}</SpanType>
          ))}
        </PokemonType>
      </div>
      <PokemonInfo>
        <PokemonDataHeight>
          <h4>Height: </h4>
          <p>{pokemon.height * 10} cm</p>
        </PokemonDataHeight>
        <PokemonDataWeight>
          <h4>Weight: </h4>
          <p>{pokemon.weight / 10} kg</p>
        </PokemonDataWeight>
      </PokemonInfo>
    </PokemonContainer>
  )
}

export default PokemonPage

import type { NextPage } from 'next'

interface Props{
  pokemons: {
    id: number;
    name: string;
    url: string;
  }[]
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
  return (
    <div>
      <h1>PokeNext</h1>
      <ul>
        {pokemons.map((pokemon) => (
          <li key={pokemon.id}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default HomePage

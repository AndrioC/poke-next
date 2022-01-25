import styled from 'styled-components'
import { pokemonColors } from './pokemonColors'

interface SpanProps{
  type: string;
}

const returnColor = (type: string) => { 
  return pokemonColors[type]
}

export const PokemonContainer = styled.div`
  text-align: center;

  h1 {
    text-transform: capitalize;
    background-color: #333;
    color: #FFF;
    padding: 0.3em;
    margin: 0.8em auto;
    width: 300px;
  }

  h3 {
    margin: .6em auto;
    font-size: 1.2em;
  }
`;

export const PokemonType = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SpanType = styled.span<SpanProps>`
  padding: .6em 1em;
  color: #FFF;
  background-color: #000;
  margin-right: 0.5em;
  border: 1px solid #CCC;
  border-radius: 6px;
  text-transform: uppercase;
  font-size: .8em;
  background-color: ${props => returnColor(props.type)};
`;

export const PokemonInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: .5em;

  div {
    margin: 1em 0;
    padding: 0 1em;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;

export const PokemonDataHeight = styled.div`
  border-right: 1px solid #ccc;
`;

export const PokemonDataWeight = styled.div`
`;
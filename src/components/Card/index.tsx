import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import {
  CardContainer
} from './styles'

interface Props{
  pokemon: {
    id: number;
    name: string;
  }
}

const Card: NextPage<Props> = ({ pokemon }) => {
  return (
    <CardContainer>
      <Image 
        src={`${process.env.NEXT_PUBLIC_CDN_URL}/${pokemon.id}.png`}
        width="120"
        height="120"
        alt={pokemon.name}
      />
      <h3>{pokemon.name}</h3>
      <Link href={`/pokemon/${pokemon.id}`}>
        <a>Detalhes</a>
      </Link>
    </CardContainer>
  )
}

export default Card

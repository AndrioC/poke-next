import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect } from 'react'
import HomePage from '../src/pages/HomePage'
import api from '../src/services/api'

export async function getStaticProps(){
  const maxPokemons = 252
  const res = await api.get(`/?limit=${maxPokemons}`)

  res.data.results.forEach((item: any, index: any) => {
    item.id = index + 1
  })

  return {
    props: {
      pokemons: res.data.results
    }
  }
}

interface Props{
  pokemons: {
    id: number;
    name: string;
    url: string;
  }[]
}

const Home: NextPage<Props> = ({ pokemons }) => {  
  return (
    <>
      <Head>
        <title>PokeNext</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomePage pokemons={pokemons} />
    </>
  )
}

export default Home

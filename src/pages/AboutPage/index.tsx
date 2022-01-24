import type { NextPage } from 'next'
import Image from 'next/image'
import {
  AboutContainer
} from './styles'

import charizardImage from '../../assets/images/charizard.png'

const AboutPage: NextPage = () => {
  return (
    <AboutContainer>
      <h1>About the project</h1>
      <p>Do you like pokemon? Then this project was made for you, a pokemon fan. You can go through some pokemons cards and get to know a little bit more about them. Have fun!</p>
      <Image src={charizardImage} width="300" height="300" alt="CHarizard"/>
    </AboutContainer>
  )
}

export default AboutPage

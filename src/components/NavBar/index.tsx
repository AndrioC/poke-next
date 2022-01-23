import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import pokeballImage from '../../assets/images/pokeball.png'
import {
  NavBarContainer,
  Logo,
  LogoTitle,
  LinkItems,
} from './styles'

const NavBar: NextPage = () => {
  return (
    <NavBarContainer>
      <Logo>
        <Image src={pokeballImage} width="30" height="30" alt="PokeNext" />
        <LogoTitle>PokeNext</LogoTitle>
      </Logo>
      <LinkItems>
        <li>
          <Link href='/'><a>Home</a></Link>
        </li>
        <li>
          <Link href='/about'><a>Sobre</a></Link>
        </li>
      </LinkItems>
    </NavBarContainer>
  )
}

export default NavBar

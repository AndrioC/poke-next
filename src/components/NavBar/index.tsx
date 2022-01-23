import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import pokeballImage from '../../assets/images/pokeball.png'

const NavBar: NextPage = () => {
  return (
    <nav>
      <div>
        <Image src={pokeballImage} width="30" height="30" alt="PokeNext" />
        <p>logo</p>
        <h1>PokeNext</h1>
      </div>
      <ul>
        <li>
          <Link href='/'><a>Home</a></Link>
          <Link href='/about'><a>Sobre</a></Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar

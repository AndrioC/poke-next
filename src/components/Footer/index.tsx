import type { NextPage } from 'next'
import {
  FooterContainer
} from './styles'

const Footer: NextPage = () => {
  return (
    <FooterContainer>
      <p><span>PokeNext</span> &copy; {(new Date().getFullYear())}</p>
    </FooterContainer>
  )
}

export default Footer

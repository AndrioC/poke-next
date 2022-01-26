import styled from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2em 1em;
  margin-bottom: 2em;
  width: 24%;
  border-radius: 1em;
  border: 2px solid #E33D33;
  box-shadow: 5px 5px 12px rgba(0, 0, 0, 0.5);
  background-color: #333;
  color: #fff;

  h3 {
    text-transform: capitalize;
    margin-bottom: 1em;
    font-size: 1.4em;
  }

  a {
    text-decoration: none;
    background-color: #fff;
    color: #222;
    padding: .7em 1.2em;
    border-radius: 5px;
    font-weight: bold;
    transition: 0.4s;

    :hover{
      background-color: #E33D33;
      color: #fff;
    }
  }
`;
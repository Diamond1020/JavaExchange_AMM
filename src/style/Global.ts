import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    // background-color: ${({ theme }) => theme.colors.background};
    background-image: url('/images/bgimage.png');

    img {
      height: auto;
      max-width: 100%;
    }
  }
`

export default GlobalStyle

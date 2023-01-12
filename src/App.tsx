import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/Global'
import Container from './components/Container'
import { theme } from './helpers/constants'
import Header from './components/Header'
import data from './data/index'
import Card from './components/Card'
import Footer from './components/Footer'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Container>
        {data && data.map((item) => <Card key={item.id} item={item} />)}
      </Container>
      <Footer />
    </ThemeProvider>
  )
}

export default App

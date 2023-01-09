import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/Global'
import Container from './components/Container'
import { theme } from './helpers/constants'
import Nav from './components/Nav'
import Logo from './components/Logo'
import Button from './components/Button'
import Header from './components/Header'
import Flex from './components/Flex'
import Image from './components/Image'
import data from './data/index'
import Card from './components/Card'
import Footer from './components/Footer'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header>
        <Container>
          <Nav>
            <Logo src='./images/logo.svg' alt='' />
            <Button>Try It Free</Button>
          </Nav>
          <Flex>
            <div>
              <h1>Build The Community Your Fans Will Love</h1>

              <p>
                Huddle re-imagines the way we build communities. You have a
                voice, but so does your audience. Create connections with your
                users as you engage in genuine discussion.
              </p>

              <Button bg='#ff0099' color='#fff'>
                Get Started For Free
              </Button>
            </div>

            <Image src='./images/illustration-mockups.svg' alt='' />
          </Flex>
        </Container>
      </Header>
      <Container>
        {data && data.map((item) => <Card key={item.id} item={item} />)}
      </Container>
      <Footer />
    </ThemeProvider>
  )
}

export default App

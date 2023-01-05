import './App.css'
import { Container } from 'react-bootstrap'

import {
  Contact,
  Cta,
  Features,
  Footer,
  Hero,
  Navigation,
  Quote,
} from './components'

const App = () => (
  <Container fluid className="p-0">
    <Navigation />
    <Hero />
    <Features />
    <Quote />
    <Cta />
    <Contact />
    <Footer />
  </Container>
)

export default App

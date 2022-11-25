import './App.css'
import { Container } from 'react-bootstrap'
import Cta from './components/Cta'
import Footer from './components/Footer'
import Features from './components/Features'
import Navigation from './components/Navigation'
import Quote from './components/Quote'
import Showcase from './components/Hero'
import Contact from './components/Contact'

function App() {
  return (
    <Container fluid>
      <Navigation />
      <Showcase />
      <Features />
      <Quote />
      <Cta />
      <Contact />
      <Footer />
    </Container>
  )
}

export default App

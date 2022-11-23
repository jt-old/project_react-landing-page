import './App.css'
import Cta from './components/Cta'
import Footer from './components/Footer'
import Features from './components/Features'
import Navigation from './components/Navigation'
import Quote from './components/Quote'
import Showcase from './components/Hero'

function App() {
  return (
    <div className='App'>
      <Navigation />
      <Showcase />
      <Features />
      <Quote />
      <Cta />
      <Footer />
    </div>
  )
}

export default App

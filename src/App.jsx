import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import ThemeCards from './components/ThemeCards/ThemeCards'
import Reviews from './components/Reviews/Reviews'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ThemeCards />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App

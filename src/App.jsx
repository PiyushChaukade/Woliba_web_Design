import Navbar from './components/Navbar/Navbar.jsx';
import Page1 from './components/Page 1/Page1.jsx';
import Banner from './components/Banner/Banner.jsx'
import Footer from './components/Footer/Footer.jsx'

import './App.css'
function App() {
 

  return (
    <>
    <div className='mainContainer'>
    <Navbar />
     <Page1/>
   <Banner/>
    <Footer/>
    </div>
    
    </>
  )
}

export default App

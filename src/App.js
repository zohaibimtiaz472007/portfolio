// import logo from './logo.svg';
import './App.css';
import About from './Components/About';
import Footer from './Components/Footer';
import Intro from './Components/Intro';
import Navbar from './Components/Navbar';
import Portfolio from './Components/Portfolio';
import { ContactUs } from './Components/ContactUs';

function App() {
  return (
    <div >
      <Navbar/>
      <Intro/>
      <About/>
      <Portfolio/>
      <ContactUs/>
      <Footer/>
    </div>
  );
}

export default App;

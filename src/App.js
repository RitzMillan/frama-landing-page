import './App.scss';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Franchise from './Pages/Franchise/Franchise';
import Learn from './Pages/Learn/Learn';
import Partner from './Pages/Partner/Partner';
import Benefits from './Pages/Benefits/Benefits';
import Numerics from './Pages/Numerics/Numerics';
import Business from './Pages/Business/Business';
import Understand from './Pages/Understand/Understand';
import Navbar from './Components/TopNav/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      {/* <About />
      <Franchise />
      <Learn />
      <Partner />
      <Benefits />
      <Numerics />
      <Business />
      <Understand /> */}
    </>
  );
}

export default App;

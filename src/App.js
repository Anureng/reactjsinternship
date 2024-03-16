import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Feature from './components/Feature';
import Add from './components/Add';
import Testomonials from './components/Testomonials';
import End from './components/End';
import Footer from './components/Footer';

function App() {
  return (
 <>
       <Navbar />
      <Login />
      <Feature />
      <Add />
      <Testomonials />
      <End />
      <Footer />
 </>
  );
}

export default App;

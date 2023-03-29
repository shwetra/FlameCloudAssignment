import './App.css';
import Footer from './Components/Footer';
import { Locationcheck } from './Components/Locationcheck';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
       <Navbar/>
      <Locationcheck/>
      <Footer/>
     
    </div>
  );
}

export default App;

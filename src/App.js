import './App.css';
import Footer from './Components/Footer';
import { Locationcheck } from './Components/Locationcheck';
import Navbar from './Components/Navbar';
import { AllRoutes } from './Components/Routes/AllRoutes';

function App() {
  return (
    <div className="App">
       <Navbar/>
      <AllRoutes/>
      <Footer/>
     
    </div>
  );
}

export default App;

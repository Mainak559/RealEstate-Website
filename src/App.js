import './App.css';
import Extra from './Components/Extra/Extra';
import Header from './Components/Header/Header';
import Companies from './Components/Companies/Companies';
import Residencies from './Components/Residencies/Residencies';
import Value from './Components/Value/Value';
import Contact from './Components/Contact/Contact';
function App() {
  return (
    <div className="App">
      <div className="white-gradient">
      <Header/>
      <Extra/>
      </div>
      <Companies />
      <Residencies/>
      <Value/>
      <Contact/>
    </div>
  );
}

export default App;

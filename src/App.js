import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/navegacion/NavBar';
import inicio from './components/pages/inicio';
import items from './components/pages/items';

function App() {

  return (
    <div className="App">
      <Router>
        <NavBar/>
      </Router>
      
    </div>
  );
}

export default App;

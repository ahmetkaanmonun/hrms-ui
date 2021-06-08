import logo from './logo.svg';
import './App.css';
import Dashboard from './layouts/Dashboard';
import 'semantic-ui-css/semantic.min.css'
import { Container } from 'semantic-ui-react';
import Navi from './layouts/Navi';

function App() {
  return (
    <div className="App">

      <Navi></Navi>
      
      <Container className="ui.main.container">
         <Dashboard/>
      </Container>    
      
    </div>
  );
}

export default App;

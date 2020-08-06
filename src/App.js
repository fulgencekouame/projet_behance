import React from 'react';
import Accueil from './Accueil';
import './App.css';
import Partie1 from './Partie1';
import Partie2 from './Partie2';
import Partie3 from './Partie3';
import Partie4 from './Partie4';
import Partie5 from './Partie5';
import Partie6 from './Partie6';


//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faCoffee } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
       <Accueil />
       <Partie1 />
       <Partie2 />
       <Partie3 />
       <Partie4 />
       <Partie5 />
       <Partie6 />
      
       </div>
    </div>
      
  ); 
}

export default App;

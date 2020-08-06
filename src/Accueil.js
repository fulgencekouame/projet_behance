import React, { Component } from 'react';
import './images/imag2.jpg'
import Menu from './Menu'
import Contenu from './Contenu'

class Accueil extends Component {
    render() {
        return(
            <div className="container-fluid">
                <div className="row">
                  <div className="accueil">
                    <div className="color">
                      <Menu />
                      <Contenu />
                       
                    </div>
                  </div>
               </div>
            </div>
        )

    }
    
}

export default Accueil;
import React, { Component } from 'react';




class Contenu extends Component {
    render() {
        return(
            <div className="container">
                <div className="row">
                  <div className="col-md-5">
                      <h2>THE COMPAGNY <span>TITLE</span> AND <span>SLOGAN</span> GOES HERE</h2>
                      <h6>Le lorem ipsum est, en imprimerie, une suite de mots 
                          sans signification utilisée à titre provisoire pour calibrer une mise en page,Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer
                           une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la</h6>
                           <button type="boutton"className="btn btn-warning">PURCHAS NOW</button>
                           <button type="boutton"class="btn" className="btn btn-outline-warning">CONTACT US</button>
                   </div>
                  <div className="col-md-7 imagee">
                  </div>
               </div>
            </div>
        )

    }
    
}

export default Contenu;
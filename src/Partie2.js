import React, { Component } from 'react';


class Partie2 extends Component {
    render() {
        return(
            <div className="container-fluid part2">
                <div className="row">
                  <h2 className="p2">OUR SERVICES</h2>
               </div>
               <div className="container">
                   <div className="row global">
                       <div className="col-md-4 team">
                           <h5 className="service">Service here</h5>
                           <p>Le lorem ipsum est, en imprimerie, une suite de mots sans signification 
                               utilisée à titre provisoire pour</p>
                       
                       </div>
                       <div className="col-md-4 glob">
                       <h5 className="service">Service here</h5>
                           <p>Le lorem ipsum est, en imprimerie, une suite de mots sans signification 
                               utilisée à titre provisoire pour</p>
                       
                       
                       </div>
                       <div className="col-md-4 block">
                       <h5 className="service">Service here</h5>
                           <p>Le lorem ipsum est, en imprimerie, une suite de mots sans signification 
                               utilisée à titre provisoire pour</p>
                       
                       
                       </div>
                   </div>
               </div>
            </div>
        )

    }
    
}

export default Partie2;
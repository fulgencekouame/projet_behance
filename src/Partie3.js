import React, { Component } from 'react';
import {BsChevronCompactDown} from 'react-icons/bs';
import {BsChevronCompactUp} from 'react-icons/bs';
import {BsChevronLeft} from 'react-icons/bs';

import femme from './images/femme.jpg';


class Partie3 extends Component {
    render() {
        return(
            <div className="container-fluid partie3">
                <div className='container'>
               <div className="row uno">
                    <div className="col-lg-6 ">
                        <h2 className="titre" >OUR MISSION </h2>
                    </div>
                    <div className="col-lg-6 ">
                        <h2 className="titre" >OUR FAQs </h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="t">
                            <img src={femme} alt="femme" className="monimage" />
                                Le lorem ipsum est, en imprimerie, une suite de
                                 sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page e
                                 achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum. Wikipédia
                                 Le lorem ipsum est, en imprimerie, une suite de
                                 sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page e
                                 achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum. Wikipédia 
                        </div>
                   </div>
                   <div className="col-lg-6">
                         <button type="button" className="mbtn btn-primary">How We Can Enter Our Data? &nbsp;&nbsp;&nbsp;&nbsp;
                            <BsChevronCompactDown></BsChevronCompactDown>
                         </button>
                         <p className="tp">
                               Le lorem ipsum est, en imprimerie, une suite de
                                 sans signification<br></br> utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page e
                                 achevée. Généralement,<br></br> on utilise un texte en faux latin, le Lorem ipsum ou Lipsum. Wikipédia<br></br>
                                 Le lorem ipsum est, en imprimerie, une suite de
                          </p>
                           <button type="button" className="mbtn btn-primary">How We Can Enter Our Data? &nbsp;&nbsp;&nbsp;&nbsp;
                            <BsChevronCompactUp className="top"></BsChevronCompactUp>
                            </button>
                            <button type="button" className="mbtn btn-primary">How We Can Enter Our Data? &nbsp;&nbsp;&nbsp;&nbsp;
                               <BsChevronLeft className="top"></BsChevronLeft>
                            </button> 
                     </div>
                </div>
            
         </div>
         </div>
        )


    }
    
    
}

export default Partie3;
import React, { Component } from 'react';
//import Navbar from 'react-bootstrap/Navbar'
import {BsSearch} from 'react-icons/bs'
import {FaDolly} from 'react-icons/fa'

class Menu extends Component {
    render() {
        return( 
            
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h3>COMPANY  <span>LOGO</span></h3>
                    </div>
                    <div className="col-md-8 pp">
                        <div className="navi">
                            <a href="#"><span>HOME</span></a>
                            <a href="#">ABOUT US</a>
                            <a href="#">PORTFOLIO</a>
                            <a href="#">FEATURES</a>
                            <a href="#">BLOG</a>
                            <a href="#">SHOP</a>
                            <a href="#">CONTACT</a>
                            <a href="#"><BsSearch></BsSearch></a>
                            <a href="#"><FaDolly></FaDolly> </a>
                          
                        </div>
                   
                    </div> 
                 </div>
             
            </div>
        )

    }
    
}

export default Menu;
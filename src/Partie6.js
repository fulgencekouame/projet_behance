import React from 'react'

import {BsFillEnvelopeFill} from 'react-icons/bs';
import {FaPhoneAlt} from 'react-icons/fa';
import {FaMapMarkerAlt} from 'react-icons/fa';
import {FaFacebookSquare} from 'react-icons/fa';
import {FaTwitterSquare} from 'react-icons/fa';
import {FaGooglePlusSquare} from 'react-icons/fa';



const Partie6 = () => {
    return (
        <div className="container-fluid footer">
        <div className="container ">
            <div className="row ">
                <div className="col-lg-3">
                    <h4 className="monTitle">                             
                    <span className="spantt"> COMPANY</span>&nbsp;<span>LOGO</span>
                    </h4>
                    <p className="mp3">
                    Plush pillows and breathable bed linens 
                    Soft, oversized bath towels 
                    Full-sized, pH-balanced toiletries .  
                    </p>
                    <BsFillEnvelopeFill className="iconCouleur"></BsFillEnvelopeFill>&nbsp;&nbsp;
                    <em className="Em3">sytakef@gmail.com</em>
                </div>
                <div className="col-lg-3">
                    <h4 className="monTitle">                             
                    <span className="spantt">Quick Links</span></h4>
                    <ul className="lien">
                        <li> Home</li>
                        <li> About </li>
                        <li> Services</li>
                    </ul>
                </div>
                <div className="col-lg-3">
                    <h4 className="monTitle">                             
                    <span className="spantt">Quick Links</span></h4>
                    <ul className="lien">
                        <li> Home</li>
                        <li> About </li>
                        <li> Services</li>
                    </ul>
                </div>
                <div className="col-lg-3">
                    <h4 className="monTitle">                             
                    <span className="spantt">Quick Links</span></h4>
                    <ul className="lien">
                        <li> Home</li>
                        <li> About </li>
                        <li> Services</li>
                    </ul>
                </div>
            </div>
            <hr className="trait"></hr>
            <div className="row">
                <div className="col-lg-3">
                    <FaPhoneAlt className="iconCouleur"></FaPhoneAlt>&nbsp;&nbsp;
                    <em className="Em3">00-225-48-44-59-62</em>
                    <br></br>
                    <br></br>
                    <FaMapMarkerAlt className="iconCouleur"></FaMapMarkerAlt>&nbsp;&nbsp;
                    <em className="Em3">Angre soleil 3</em>
                </div>
                <div className="col-lg-3">
                    <ul className="lien">
                        <li> Blog</li>
                        <li> Contact </li>
                        <li> Testimonial</li>
                    </ul>
                </div>
                <div className="col-lg-3">
                    <ul className="lien">
                        <li> Blog</li>
                        <li> Contact </li>
                        <li> Testimonial</li>
                    </ul>
                </div>
                <div className="col-lg-3">
                    <ul className="lien">
                        <li> Blog</li>
                        <li> Contact </li>
                        <li> Testimonial</li>
                    </ul>
                </div>
            </div>
            <hr className="trait2"></hr>
            <div className="row">
               <div className="col-lg-9">
                 <em className="Em3"> All Rights Reserved By</em> <em className="iconCouleur">Kkfle</em> <em className="Em3"> 2020</em> 
               </div>
               <div className="col-lg-3">
                   <em className="icons3"><FaFacebookSquare></FaFacebookSquare>&nbsp; <FaTwitterSquare></FaTwitterSquare>
                   &nbsp; <FaGooglePlusSquare></FaGooglePlusSquare>
                   </em>
                   
               </div>
            </div>
        </div>
    </div>   
    )
}

export default Partie6;

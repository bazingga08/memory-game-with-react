/*global $*/
import React, { Component } from 'react';
import './App.css';
import ace from './ace.png'
import clu from './clu.png'
import dim from './dim.png'
import hea from './hea.png'
import back from './back.jpeg'

class Card extends Component{ 


   
    
    render()
    {       
        
        return(
          
        <div className="card1" onClick={ ()=>(this.props.Ab(this.props.id))} >
           
            <div className="front" >
            <img src={back}  className="imagestylef" style={{ display: this.props.opened ? "none" :   "block"  }}/>
            </div>
          
            <div className="back">
            <img src={this.props.image} className="imagestyleb " style={{ display: this.props.opened ? "block" :   "none"  }} />
            </div>
               
        </div>
        );
    }
}


export default Card;

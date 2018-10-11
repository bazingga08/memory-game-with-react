import React, { Component } from 'react';
import './App.css';
import Card from './Card';
import ace from './ace.png';
import clu from './clu.png';
import dim from './dim.png';
import hea from './hea.png';
import back from './back.jpeg';
class Maingame extends Component{
    state={
        img11:[{id:1,pic:ace},{id:2,pic:clu},{id:3,pic:dim},{id:4,pic:hea}]   ,
        images:[ace,clu,hea,dim]    
      };

    render()
    {
        return(
            
        <div className="maindeck">
       <img src={this.state.images[0]} />
            <h1 className="title">FIND ALL THE CARDS</h1>
        <section className="contained">
        <div className="contained" >
            {this.state.images.map((img)=>{return (<Card img={img}/>)})
            }
        </div>
    </section>
        </div>
        );
    }
}

export default Maingame;
import React, { Component } from 'react';
import './App.css';
import Card from './Card';
import ace from './ace.png';
import clu from './clu.png';
import dim from './dim.png';
import hea from './hea.png';
import SweetAlert from 'sweetalert2-react';
import swal from 'sweetalert2';


let count=0,moves=0;
var fimg ;
var fimgr;
var c1;
var c2;
var shuffle=require('shuffle-array');
   
 
class Maingame extends Component{
    constructor(props){
        <script src="dist/easytimer.min.js"></script>
        super(props);
        this.state = {
            images:shuffle([{value:1,pic:ace,opened:false,name:'a'},
                    {value:2,pic:clu,opened:false,name:'b'},
                    {value:3,pic:dim,opened:false,name:'c'},
                    {value:4,pic:hea,opened:false,name:'d'},
                    {value:5,pic:ace,opened:false,name:'a'},
                    {value:6,pic:clu,opened:false,name:'b'},
                    {value:7,pic:dim,opened:false,name:'c'},
                    {value:8,pic:hea,opened:false,name:'d'}]),
                    c1:null,c2:null,fimg:null,fimgr:null,count:0,moves:0,
                    seconds: 0,pair:0,i:0
          
        
                };
    }
  
    tick=()=>{
        this.setState(state => ({
            seconds: state.seconds + 1
         
        }));
     }
     starttime=()=> {
        this.interval = setInterval(() => this.tick(), 1000);
      }
    
      endtime() {
        
        clearInterval(this.interval);
      }
      
      test=(id)=>{
        this.starttime();
       moves++;
        count++;
        console.log(this.state.images.opened)
        this.state.images[id].opened ?  this.state.images[id].opened=false :  this.state.images[id].opened=true;
    
        if (count == 1) {

            fimg=id;
            c1=this.state.images[id].name;
            console.log(c1);
            console.log(count);       
           
        }

         else if (count == 2) 
         {
             fimgr=id;
            c2=this.state.images[id].name;
            if (c1 !== c2)
            {
               this.state.images[fimg].opened=false;
               this.state.images[fimgr].opened=false;
                
                this.setState({
                   images :this.state.images
                });
               
            } 
            
            else
            {
                this.state.pair++;
                this.state.images[fimg].opened=true;
                this.state.images[fimgr].opened=true;
                this.setState({
                    images :this.state.images,
                    
                });
               
            }
            count = 0;
        } 
        
        else 
        {
            
            this.state.images[fimg].opened=false;
            this.setState({
                images :this.state.imagesopen
            });
           
        }


        this.setState({
            opened: this.state.images.opened
        });
       if(this.state.pair==4)
       {
        swal({
            title: 'congrats',
            confirmButtonText: 'restart'
            

          }).then(()=>{  
        window.location.reload();
        })
          

       }
    
        
      }
 
       
     
    render()
    {
       
      
        return(
   
            <div>
            <div className="maindeck">
            <h1 className="title">FIND ALL THE CARDS</h1>
            <h3 class="timclas">MOVES:{moves} </h3>
        <h3  class="timclas">Time : {this.state.seconds}</h3>
            <section className="contained">
            <div className="contained" >
                
                {this.state.images.map((img,index)=>{
                    return (
                        <Card
                            id={index}
                            opened={img.opened}
                            image={img.pic}
                            Ab={this.test}/>)})
                }
            </div>
            </section>
            
        
        </div>
          </div>
        );
    }
   
}

export default Maingame;
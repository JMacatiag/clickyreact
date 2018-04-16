import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Nav from "./components/Nav";
import friends from "./cast.json";
import "./App.css";
import { Navbar } from 'react-bootstrap';
var shuffle = require('shuffle-array');

console.log(friends);
let scoreCounter=0;
let clickedArray=[];
let topScore=0;
let announce="Click on the on an image and don't pick the same one!";


  

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    scoreCounter,
    topScore,
    announce
  };

  
  
  


  addCounter = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    // const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    clickedArray.push(id);
    // console.log(clickedArray);
    const filtered=clickedArray.filter(idCheck=>idCheck===id);
    console.log(filtered);
    if (filtered.length>1){
      clickedArray=[];
      announce="Wrong! You start over now loser";
      if(scoreCounter>topScore){
        topScore=scoreCounter;
        console.log('top score: '+topScore);
        
      
      }
      scoreCounter=0;
      this.setState({announce, topScore});
      
    } 
    else{
      scoreCounter++;
      announce="Corrent! One point for you";
      console.log('score: '+scoreCounter);
      this.setState({announce, scoreCounter});
      
    }

    shuffle(friends);
    this.setState({ friends, announce, topScore, scoreCounter });
  };

  

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Nav>
          Score={scoreCounter} | 
          Top Score={topScore}
        </Nav>
        <Title>{this.state.announce}</Title>
        {this.state.friends.map(friend => (
          <FriendCard
            addCounter={this.addCounter}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;


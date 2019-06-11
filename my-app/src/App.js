import React from 'react';
import Header from './components/Header';
import Wrapper from './components/Wrapper';
import robots from './robots.json';
import RobotCard from './components/RobotCard';
import Nav from './components/Nav';

class App extends React.Component{
  state = {
    robots,
    score: 0,
    topScore: 0,
    maxScore: 9,
    message: "Click To Begin",
    messageBoard: ""
  };

//need to write a function that handles the click event.
//needs to add to score and change the image attribute to clicked
//need to write a reset function to handle a loss in the event that an image is clicked twice

  shuffle = () => {
    //copy the data array
    const masters = this.state.robots;
    //Fisher-Yates shuffle
    for (let i = masters.length - 1; i > 0; i--) {
      let x = Math.floor(Math.randon() * (i+1)); //random index from 0 to i
      [masters[i], masters[x]] = [masters[x], masters[i]]; //swap elements
    } 
    //return the newly shuffled array to the react setState function 
    this.setState({ characters: masters });
  }

  render(){
  return (
    <div className="App">
      <Wrapper>
        <Nav 
        topScore={this.state.topScore}
        score={this.state.Score}
        message={this.state.message}
        />
        <Header />
          
        {this.state.robots.map(robot =>(
        <RobotCard 
        shuffleBot={this.shuffle}
        id ={robot.id}
        key={robot.id}
        name={robot.name}
        image={robot.image}
        />
        ))}
      </Wrapper>  
    </div>
  );
}
}

export default App;

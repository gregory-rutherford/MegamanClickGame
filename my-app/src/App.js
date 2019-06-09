import React from 'react';
import Header from './components/Header';
import Wrapper from './components/Wrapper';
import robots from './robots.json';
import RobotCard from './components/RobotCard';

class App extends React.Component{
  state = {
    robots
  }
  render(){
  return (
    <div className="App">
      <Wrapper>
        <Header />
        {this.state.robots.map(robot =>(
        <RobotCard 
        id ={robot.id}
        key={robot.id}
        name= {robot.name}
        image={robot.image}/>
        ))}
      </Wrapper>  
    </div>
  );
}
}

export default App;

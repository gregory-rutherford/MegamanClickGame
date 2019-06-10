import React from 'react';
import Header from './components/Header';
import Wrapper from './components/Wrapper';
import robots from './robots.json';
import RobotCard from './components/RobotCard';
import Nav from './components/Nav';

class App extends React.Component{
  state = {
    robots
  };

  selectRobot = () => {
    console.log("hey");
  };

  render(){
  return (
    <div className="App">
      <Wrapper>
        <Nav />
        <Header />
          
        {this.state.robots.map(robot =>(
        <RobotCard 
        selectRobot={this.selectRobot}
        id ={robot.id}
        key={robot.id}
        name={robot.name}
        image={robot.image}/>
        ))}
      </Wrapper>  
    </div>
  );
}
}

export default App;

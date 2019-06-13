import React from "react";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import robots from "./robots.json";
import RobotCard from "./components/RobotCard";
import Nav from "./components/Nav";
import Content from "./components/Content";

class App extends React.Component {
  state = {
    robots,
    score: 0,
    topScore: 0,
    maxScore: 9,
    messageBoard: "",
    storage: []
  };

  processClick = id => {
    //variables needed for scoreboard and keeping track of clicked images
    const { score, storage } = this.state;
    const currentScore = score + 1;
    // detect win
    if (storage.length >= this.state.maxScore - 1) {
      this.setState({ messageBoard: "You Won! Click to play again." });
      this.reset();
    }
    //if incorrect update the messageboard and reset the game
    else if (storage.includes(id)) {
      this.setTop();
      this.setState({ messageBoard: "Incorrect! Try Again." });
      this.reset();
    }
    //if correct push the id of the guessed into array, pass new pushed array and update scorebooard using setState
    else {
      storage.push(id);
      this.setState({
        storage,
        score: currentScore,
        messageBoard: "Correct!"
      });
      this.shuffle();
    }
  };

  shuffle = () => {
    //copy the data array
    const masters = this.state.robots;
    //algorithm for shuffling arrays
    for (let i = masters.length - 1; i > 0; i--) {
      let x = Math.floor(Math.random() * (i + 1)); //random index from 0 to i
      [masters[i], masters[x]] = [masters[x], masters[i]]; //swap elements
    }
    //return the newly shuffled array to the react setState function
    this.setState({ characters: masters });
  };

  reset = () => {
    this.shuffle();
    //clear array of clicked images and reset score to zero
    this.setState({
      storage: [],
      score: 0
    });
  };

  setTop = () => {
    const { score, topScore } = this.state;
    if (topScore < score) {
      this.setState({ topScore: score });
    }
  };

  render() {
    return (
      <div className="App">
        <Wrapper>
          <Nav
            topScore={this.state.topScore}
            score={this.state.score}
            message={this.state.messageBoard}
          />
          <Header />
          <Content>
            {this.state.robots.map(robot => (
              <RobotCard
                id={robot.id}
                key={robot.id}
                name={robot.name}
                image={robot.image}
                clicky={this.processClick}
              />
            ))}
          </Content>
        </Wrapper>
      </div>
    );
  }
}

export default App;

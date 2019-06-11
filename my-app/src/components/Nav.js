import React from "react";

const Nav = (props) => 
      <div className="navbar">
        <nav>
        <a href="/">
          Megaman II Memory Game
        </a>
        <p>You Guessed: <span className='guessDisplay'>{props.message}</span></p>
        <p>Your Score: <span className='scoreBoard'>{props.score}</span></p>
        <p>High Score: <span className='highScore'>{props.topScore}</span></p>
        </nav>
      </div>


export default Nav;
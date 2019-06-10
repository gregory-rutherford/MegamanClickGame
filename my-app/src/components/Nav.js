import React from "react";

class Nav extends React.Component{
  render() {
    return (
      <div className="navbar">
        <nav>
        <a href="/">
          Megaman II Memory Game
        </a>
        <p><span className='guessDisplay'></span></p>
        <p><span className='scoreBoard'></span></p>
        </nav>
      </div>
    );
  }
}

export default Nav;
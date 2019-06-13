import React from "react";
import "../css/Nav.css";

const Nav = (props) => 
      <div className="navbar">
        <nav>
          <p>Megaman II Memory Game</p>
          <p>{props.message}</p>
          <p>Score: {props.score} | Top Score: {props.topScore}</p>
        
        </nav>
      </div>


export default Nav;
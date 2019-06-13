import React from "react";
import "../css/RobotCard.css"

const RobotCard = (props) => 
    <div className="card">
        <div className="img-container">
          <img 
          alt={props.name} 
          src={props.image}
        onClick={() => props.clicky(props.id)}
          />
        </div>
        <div className="content">
            <p>
               {props.name}
            </p>
        </div>
      </div>


export default RobotCard;

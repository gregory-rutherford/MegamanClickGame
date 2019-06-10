import React from "react";
import "../css/RobotCard.css"

const RobotCard = (props) => 
    <div className="card">
        <div className="img-container" onClick={props.selectRobot}>
          <img alt={props.name} src={props.image} />
        </div>
        <div className="content">
            <p>
               {props.name}
            </p>
        </div>
      </div>


// class RobotCard extends React.Component {
   
//   render() {
//     return (
//         <div className="card">
//         <div className="img-container" onClick={() => this.props.selectRobot()}>
//           <img alt={this.props.name} src={this.props.image} />
//         </div>
//         <div className="content">
//             <p>
//                {this.props.name}
//             </p>
//         </div>
//       </div>
//     );
//   }
// }

export default RobotCard;

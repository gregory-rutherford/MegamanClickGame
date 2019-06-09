import React from "react";

class RobotCard extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="img-container">
          <img alt={this.props.name} src={this.props.image} />
        </div>
        <div className="content">
          <ul>
            <li>
              <strong>Name:</strong> {this.props.name}
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default RobotCard;

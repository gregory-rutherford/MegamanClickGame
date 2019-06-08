import React from "react";

class Header extends React.Component {
    render(){
        return (
            <header className="top">
                <h1>Megaman II Memory Game</h1>
                <h3>Click on a Robot Master to earn points, do not click on any image more than once!</h3>
            </header>
        )
    }
}

export default Header;
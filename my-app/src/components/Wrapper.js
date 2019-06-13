import React from 'react';
import '../css/Wrapper.css';


const Wrapper = (props) => 
    <div className="wrapper">{props.children}</div>;

export default Wrapper;
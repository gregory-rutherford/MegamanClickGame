import React from 'react';
import '../css/Content.css';
const Content = (props) =>
    <div className="site-content">
    {props.children}
    </div>

export default Content;
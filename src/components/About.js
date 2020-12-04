import React, { Component } from "react";

import './About.css';
import about from "../config/about.json"

class About extends Component {
    render() {
        return (
        <div class="about">
            <div class="picture">
                <img src="/me.jpg" />
            </div>
            <div class="blurb">
                {about.blurb}
            </div>
            <div class="intro">
                {about.details.map(p => (<p>{p}</p>))}
            </div>
        </div>
        );
    } 
}

export default About;
import React, { Component } from "react";

import './Writing.css';

class Writing extends Component {
  componentDidMount() {
    window.mediumWidget();
  }
  render() {
    return (
      <div>
        <div class="writing" id="writing-title">WRITING</div>
        <div class="writing" id="writing-description">I occassionally write about various topics on my Medium at <a href="https://jamie-fu.medium.com/">jamie-fu.medium.com</a>. Below are a few of my more recent pieces; I usually write about whatever interests me at a given moment, so I consider this more of a feel-good blog than anything. I've always been interested in creative writing too, of which I do a little bit of every now and then. I consider myself to be more of a storyteller than a world-builder, but every time I write I try to practice somethiing new. </div>
        <div id="medium-widget"></div>
      </div>
    );
  }
}

export default Writing;
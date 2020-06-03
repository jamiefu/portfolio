import React, { Component } from "react";

import './About.css';

class About extends Component {
    render() {
      return (
        <div class="about">
            <div class="itsme">
                <div class="picture">
                    <img src="/me.jpg" />
                </div>
                <div class="blurb">
                    <p>
                        Hi, I'm Jamie! I'm a rising sophomore studying Computer Science and Finance at MIT on the lookout 
                        for new experiences and skills. 
                        I'm always pondering about ways to make real and positive differences in the lives of people around me, 
                        and about what it means to be happy.
                    </p>
                </div>
            </div>
            <div>
                <div class="intro">
                    <p> 
                        This summer I'm working with Prof. Max Tegmark to detect news bias with natural language processing (NLP) 
                        and continuing my work with Camera Culture at the MIT Media Lab on the split learning ML methodology. 
                        I'll also be working on some startups with friends, along with some of my own personal projects. 
                    </p>
                    <p>
                        I'm an avid explorer of machine learning, but I'm also interested in diving deeper into the fields of
                        consulting and trading. I've been trying to read and write more lately, to better understand my role 
                        in today's ever-evolving society. 
                    </p>
                    <p>
                        On campus I am the director of <a href="hackmit.org">HackMIT</a>, and am heavily involved in <a href="http://startup.mit.edu/">StartLabs</a>, <a href="wbl.mit.edu">Women Business Leaders</a>, and <a href="http://www.mitclubtennis.com/">Club Tennis</a>. 
                        In my spare time you can find me trying to learn how to play the guitar, playing cards, or taking nature walks. 
                    </p>
                </div>
            </div>
        </div>
      );
    } 
  }
  export default About;
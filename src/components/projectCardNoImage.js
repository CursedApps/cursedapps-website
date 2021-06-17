import React, { Component } from "react";
import '../css/projectCardNoImage.css'
import full from '../assets/fullbtn.png';
import quit from '../assets/quitbtn.png';
import reduce from '../assets/reducebtn.png';

class ProjectCardNoImage extends Component {
    render() {
        return (
            <React.Fragment>
                {/* <Jumbotron className="cardWrapper"> */}
                    <div className="card">
                        <div className="card-header">
                            Search BUT BETTER
                            {/* <span className="windows-interface">
                                <img src={reduce} className="windows-btn"></img>
                                <img src={full} className="windows-btn"></img>
                                <img src={quit} className="windows-btn"></img>
                            </span> */}
                        </div>

                        <div className ="card-content">
                            <h1>Search BUT BETTER</h1>
                            {/* <hr class="solid"></hr> */}
                            <p>
                                A chrome extension that enhance the basic search mechanism, adding extra features
                                such as Match Case, Match Whole Word, Search with Regex and Search in Selection,
                                as well as a dark mode
                            </p>
                        </div>

                        

                    </div>
                {/* </Jumbotron> */}
            </React.Fragment>
        );
    }
}

export default ProjectCardNoImage;
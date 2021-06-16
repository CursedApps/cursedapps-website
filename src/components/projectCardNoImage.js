import React, { Component } from "react";
import Jumbotron from 'react-bootstrap/Jumbotron'
import '../css/projectCardNoImage.css'
import header from '../assets/navbar.png';

class ProjectCardNoImage extends Component {
    render() {
        return (
            <React.Fragment>
                <Jumbotron className="content-card">
                <img src={header} className="header-img"></img>

                <h1>Search BUT BETTER</h1>
                {/* <hr class="solid"></hr> */}
                <p>
                    A chrome extension that enhance the basic search mechanism, adding extra features
                    such as Match Case, Match Whole Word, Search with Regex and Search in Selection,
                    as well as a dark mode
                </p>

                

                </Jumbotron>
            </React.Fragment>
        );
    }
}

export default ProjectCardNoImage;
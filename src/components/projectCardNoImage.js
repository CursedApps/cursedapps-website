import React, { Component } from "react";
import '../css/projectCardNoImage.css'
// import full from '../assets/fullbtn.png';
// import quit from '../assets/quitbtn.png';
// import reduce from '../assets/reducebtn.png';

class ProjectCardNoImage extends Component {
    render() {
        return (
            <React.Fragment>
                {/* <Jumbotron className="cardWrapper"> */}
                    {/* <div className="card">
                        <div className="card-header">
                            Search BUT BETTER
                        </div>

                        <div className ="card-content">
                            <h1>Search BUT BETTER</h1>
                            <p>
                                A chrome extension that enhance the basic search mechanism, adding extra features
                                such as Match Case, Match Whole Word, Search with Regex and Search in Selection,
                                as well as a dark mode
                            </p>
                        </div>
                    </div> */}

                <div class="card">
                    <h5 class="card-title">Search BUT BETTER</h5>
                    <div class="card-body">
                        <h2 class="body-title">Search BUT BETTER</h2>
                        <p class="card-text">
                            A chrome extension that enhances the basic search mechanism, adding extra features
                            such as Match Case, Match Whole Word, Search with Regex and Search in Selection,
                            as well as a dark mode
                        </p>

                        <div class="container">
                            <div class="row">
                                <div class="col-sm">
                                    <h5>Technologies Used</h5>
                                    <p> Javascript, Chrome Extensions </p>
                                </div>
                                <div class="col-sm">
                                    <h5>Check it out!</h5>
                                    <p> Links lol </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* </Jumbotron> */}
            </React.Fragment>
        );
    }
}

export default ProjectCardNoImage;
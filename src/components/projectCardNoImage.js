import React, { Component } from "react";
import '../css/projectCardNoImage.css'
// import full from '../assets/fullbtn.png';
// import quit from '../assets/quitbtn.png';
// import reduce from '../assets/reducebtn.png';

class ProjectCardNoImage extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="card">
                    <h5 className="card-title">Search BUT BETTER</h5>
                    <div className="card-body">
                        <h2 className="body-title">Search BUT BETTER</h2>
                        <p className="card-text">
                            A chrome extension that enhances the basic search mechanism, adding extra features
                            such as Match Case, Match Whole Word, Search with Regex and Search in Selection,
                            as well as a dark mode
                        </p>

                        <div className="container">
                            <div className="row">
                                <div className="col-3 title">
                                    Technologies
                                </div>
                                <div className="col">
                                    Javascript, Chrome Extensions
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-3 title">
                                Check it out
                                </div>
                                <div className="col">
                                    <a href="https://chrome.google.com/webstore/detail/search-but-better/akkbadeiheblljjoocgfbopffhkjkpda?hl=fr">Chrome Extension Store</a>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-3 title">
                                Github Repo
                                </div>
                                <div className="col">
                                    <a href="https://github.com/CursedApps/search-but-better">Search BUT BETTER</a>
                                </div>
                            </div>
                        </div>


                        <div className="contributors">
                            <a href="https://github.com/rooose"><img className="avatar" src="https://avatars.githubusercontent.com/u/17006109?s=60&v=4" width="32" height="32" title="@rooose" alt="@rooose"/></a>
                            <a href="https://github.com/ThePhosphorus"><img className="avatar" src="https://avatars.githubusercontent.com/u/22330438?s=40&v=4" width="32" height="32" title="@ThePhosphorus" alt="@ThePhosphorus"/></a>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default ProjectCardNoImage;
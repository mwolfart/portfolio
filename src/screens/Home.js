import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import profile from "../images/profile.jpg";

export const Home = () =>
    <div className="screen-content__main-panel">
        <div className="screen-content__text-panel screen-content__text-panel--left-block">
            <div className="screen-content__text-title">Hello, and welcome to my page!</div>
            <div className="screen-content__text-description">Here you can find information about me and some projects I have done - most of them college projects (for now), but hopefully there will be more personal projects with better architectures in the future :)</div>
            <div className="screen-content__text-description">You can open each project's description in the toolbar at the left side of the page. Also, if you wish, you can find this project's repository <a href="https://bitbucket.org/mwolfart/own-portfolio/src/master/">here</a>.</div>
            <div className="screen-content__text-title">About me</div>
            <div className="screen-content__text-description">I am a computer science undergraduate who likes front-end stuff and, in the spare time, I like playing games, singing and looking for new music. Despite preferring front-end I also like to explore different areas of programming and learn new technologies.</div>
        </div>
        <div className="screen-content__right-panel">
            <img src={profile} alt="Profile" className="image--square" />
            { "Murilo Wolfart" }
            <div className="screen-content__personal-data-container">
                <div className="screen-content__personal-data-column">
                    <FontAwesomeIcon icon={faMapMarkerAlt} fixedWidth className="screen-content__personal-data-icon" />
                    <FontAwesomeIcon icon={faEnvelope} fixedWidth className="screen-content__personal-data-icon" />
                    <FontAwesomeIcon icon={faLinkedin} fixedWidth className="screen-content__personal-data-icon" />
                </div>
                <div className="screen-content__personal-data-column">
                    <span className="screen-content__personal-data-icon" >Porto Alegre, RS, Brazil</span>
                    <span className="screen-content__personal-data-icon" >mwolfart@gmail.com</span>
                    <span className="screen-content__personal-data-icon" >Murilo Wolfart</span>
                </div>
            </div> 
        </div>
    </div>;
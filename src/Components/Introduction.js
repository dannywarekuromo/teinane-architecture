import React from "react";
import Intromage from "../Images/Introduction.jpg";

export default function Introduction() {
    return (
        <seciton className="introduction">
            <div className="intro-text"></div>
            <div className="intro-img">
                <div className="intro-head"></div>
                <img src={Intromage} alt="intro"/>
            </div>


        </seciton>
    )
}
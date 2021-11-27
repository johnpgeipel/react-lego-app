import React from 'react';
import logo from "../assets/images/lego-logo.svg";

const Jumbotron = (props) => {
    return(
        <div className={props.toggleHeader ? "jumbotron jumbotron-fluid toggleHeader" : "jumbotron jumbotron-fluid"}>
        <div className="jumbotron-container jumbotron-full container">
            <img className="header-logo" src={ logo } alt="lego logo" aria-hidden="true" />
            <h1 className="display-4">{ props.title }</h1>
        </div>
        { props.children }
    </div>
    )
}

export default Jumbotron;
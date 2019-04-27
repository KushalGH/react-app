import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <div className="jumbotron">
        <h1> Plural Sight Admin</h1>
        <p> React, Redux and React routers</p>
            <Link to="about" className="btn btn-primary btn-lg">
              Learn more
            </Link>
        </div>
    );

}

export default HomePage;
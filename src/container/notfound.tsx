import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return(
        <section className="container">
            <div className="row">
                <div className="col-10 text-center mt-5">
                    <h2>Error 404 your page not found :(</h2>
                    <Link to="/">Hurry up and back to home page</Link>
                </div>
            </div>
        </section>
    )
};

export default NotFound;
import React from 'react';
import { Link } from 'react-router-dom';
import notfound from '../../images/404.png';
const NotFound = () => {
    return (
        <div>
            <img style={{width:'99%'}} src={notfound} alt="" />
            <Link to="/">
            <button>Go back</button>
            </Link>
        </div>
    );
};

export default NotFound;
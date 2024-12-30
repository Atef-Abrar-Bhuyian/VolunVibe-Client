import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <h1>404!</h1>
            <h2>Page Not Fount</h2>
            <Link to={"/"}>Go Home</Link>
        </div>
    );
};

export default ErrorPage;
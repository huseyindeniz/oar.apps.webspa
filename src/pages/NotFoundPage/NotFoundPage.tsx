import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = (): JSX.Element => {
    return (
        <div>
            <p>404 page not found</p>
            <p style={{ textAlign: "center" }}>
                <Link to="/">Go to Home </Link>
            </p>
        </div>
    );
};

export default NotFoundPage;
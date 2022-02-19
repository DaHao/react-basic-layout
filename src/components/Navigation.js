import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
            <h1>Navigation</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/sample">Sample</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </div>
    );
};
export default Navigation;

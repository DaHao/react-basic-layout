import React from 'react';
import { Link } from 'react-router-dom';

const Menus = () => {
    return (
        <div>
            <h1>Menus</h1>
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
        </div>
    );
};
export default Menus;

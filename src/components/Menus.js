import React from 'react';
import { Link } from 'react-router-dom';

const Menus = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/home">Home</Link>
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

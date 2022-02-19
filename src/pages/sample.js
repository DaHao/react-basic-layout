import React, { useEffect } from 'react';

const Sample = () => {
    useEffect(() => {
        document.title = 'Sample';
    });
    return (
        <div>
            <h1>Basic App</h1>
            <p>Sample page</p>
        </div>
    );
};
export default Sample;

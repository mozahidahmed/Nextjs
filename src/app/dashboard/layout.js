import React from 'react';


const layout = ({children}) => {
    return (
        <div>
            
                <p>sitebar</p>
            
            {
                children
            }
        </div>
    );
};

export default layout;
import React from 'react';

const Wrapper = ({children}) => {
    return (
        <div>
            <h2>children을 배워봅시다</h2>
            {children}
        </div>
    );
};

export default Wrapper;
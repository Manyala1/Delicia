import React from 'react';

const FlashMessage = ({ message, type }) => {
    if (!message) return null;

    return (
        <div className={`flash-message ${type}`}>
            {message}
        </div>
    );
};

export default FlashMessage;
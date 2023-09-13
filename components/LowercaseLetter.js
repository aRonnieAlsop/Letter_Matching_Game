import React from 'react';

const LowercaseLetter = ({ lowercaseLetter }) => {
    const handleDragStart = (e) => {
        e.dataTransfer.setData('text/plain', lowercaseLetter);
    };

    return (
        <div
            className="lowercase-letter"
            draggable="true"
            onDragStart={handleDragStart}
            >
                {lowercaseLetter}
            </div>
    );
};

export default LowercaseLetter;
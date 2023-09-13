import React from 'react';

const UppercaseBox = ({ uppercaseLetter, onDrop }) => {
    const handleDrop = (e) => {
        e.preventDefault();
        const droppedLetter = e.dataTransfer.getData('text/plain');
        if (droppedLetter.toUpperCase() === uppercaseLetter) {
            onDrop(uppercaseLetter, droppedLetter);
        }
    };

    const allowDrop = (e) => {
        e.preventDefault();
    };

    return (
        <div
          className="uppercase-box"
          onDrop={handleDrop}
          onDragOver={allowDrop}
          >
            {uppercaseLetter}
          </div>
        
    );
};

export default UppercaseBox;

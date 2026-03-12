import React from 'react'

export const ProgressBar = ({ color, bg, progress }) => {
    const containerColors = {
        backgroundColor: bg,
    };

    const progressBarColor = {
        width: `${progress}%`,
        backgroundColor: color,
    };

    return (
        <div 
            className='w-full h-full bg-red-200 rounded-full'
            style={containerColors}
        >
            <div 
                className='h-full w-[90%] bg-blue-500 rounded-full'
                style={progressBarColor}
            >
            </div>
        </div>
    );
};

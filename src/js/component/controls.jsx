import React from 'react';

//create your first component
const Controls = (props) => {
    return (
        <div className="text-end">
            
            <button className='btn btn-primary mx-3' onClick={props.PlayPause}>Play/Pause</button>
            <button  className='btn btn-primary' onClick={props.Reset}>Reset</button>
        </div>

    );
};

export default Controls;
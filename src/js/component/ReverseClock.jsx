import React, { useState, useEffect, useRef } from 'react';
import PropTypes, { resetWarningCache } from "prop-types";
import Controls from "./controls.jsx";
import Home from "./home.jsx";
import ReactDOM from "react-dom";

//create your first component


const ReverseClock = (props) => {
    const [counter, setCount] = useState(props.counter);
    const [pause, setPause] = useState(false);
    const [message, setMessage] = useState('');
    const Countdown = useRef(null)

    const handlePauseToggle = () => {
        setPause(!pause);
    }
    const Reset = () => {
        setCount(prevCount => Countdown.current.value);

    }

    useEffect(() => {
        const interval = setInterval(() => {
            if (counter == 0) {
                return () => clearInterval(interval);

            }
            if (!pause) { //I used '!paused' because I set pause initially to false. 
                setCount(prevCount => prevCount - 1);
            }

        }, 1000);
        return () => clearInterval(interval);
    });

    const callHome = () => {
        ReactDOM.render(<Home counter={0} />, document.querySelector("#app"));
    }

    let counterTwo = counter.toString().split('')
    counterTwo = counterTwo.reverse()
    for (let i in counterTwo) {
        return (
            <div className='container'>
                <div className="row pt-3 gx-5">
                    <div className="col-4">
                        
                                <input ref={Countdown} type="number" defaultValue={props.counter}></input>
                            
                                
                            


                    </div>


                    <div className="col-2">
                        <div className="card">
                            <p className='card-title' defaultValue={0}>{(counterTwo[3]) ? (counterTwo[3]) : 0} </p>
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="card">
                            <p className='card-title' defaultValue={0}>{(counterTwo[2]) ? (counterTwo[2]) : 0} </p>
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="card">
                            <p className='card-title' defaultValue={0}>{(counterTwo[1]) ? (counterTwo[1]) : 0} </p>
                        </div>

                    </div>
                    <div className="col-2">
                        <div className="card">
                            <p className='card-title' defaultValue={0}>{(counterTwo[0]) ? (counterTwo[0]) : 0} </p>
                        </div>
                    </div>
                </div>
                <div className="row py-3 gx-5">
                    <div className="col-4">
                    <button className="btn btn-primary" onClick={callHome}> Return to counter </button>
                    </div>
                    <div className='col-8'>
                        <Controls PlayPause={handlePauseToggle} Reset={Reset} counter={counter} />
                    </div>
                </div>

            </div>



        );
    }


};

ReverseClock.propTypes = {
    counter: PropTypes.number,

}

export default ReverseClock;
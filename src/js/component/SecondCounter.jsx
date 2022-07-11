import React, { useState, useEffect, useRef } from 'react';
import PropTypes from "prop-types";
import Controls from "./controls.jsx";
import ReactDOM from "react-dom";
import Home from "./home.jsx";

//create your first component


const Clock = (props) => {
	const [counter, setCount] = useState(props.counter);
	const [pause, setPause] = useState(false);
	const [message, setMessage] = useState('');
	const Countdown = useRef(null)
	const Countdown2 = useRef(null)
	const Alert = () => {
		return Countdown.current.value
	}
	const handlePauseToggle = () => {
		setPause(!pause);
	}
	const Reset = () => {
		setCount(prevCount => 0);
		Countdown.current.value = 0;
		setMessage('')
	}

	useEffect(() => {
		const interval = setInterval(() => {
			const valueAlert = Alert()
			if (counter == valueAlert && valueAlert > 0) {
				setMessage('Alert at: ' + counter)
			}
			if (!pause) { //I used '!paused' because I set pause initially to false. 
				setCount(prevCount => prevCount + 1);
			}

		}, 1000);
		return () => clearInterval(interval);
	});


	const callHome = () => {
		ReactDOM.render(<Home countdown={true} counter={parseInt(Countdown2.current.value)} />, document.querySelector("#app"));
	}







	let counterTwo = counter.toString().split('')
	counterTwo = counterTwo.reverse()
	for (let i in counterTwo) {
		return (
			<div className='container '>
				<div className="row pt-3 gx-5">
					<div className="col-4">
						<div className="row">
							<div className="col-8">
								<input className="form-control" ref={Countdown} type="number" defaultValue="0" ></input>
								<p className='text-white'>{message}</p>
							</div>
							<div className="col-4">
								<button className='btn btn-primary' onClick={Alert}>Alert</button>
							</div>
						</div>
					</div>
					<div className="col-2 ">
						<div className="card">
							<p className='card-title' defaultValue={0}>{(counterTwo[3]) ? (counterTwo[3]) : 0} </p>
						</div>
					</div>
					<div className="col-2 ">
						<div className="card">
							<p className='card-title' defaultValue={0}>{(counterTwo[2]) ? (counterTwo[2]) : 0} </p>
						</div>
					</div>
					<div className="col-2 ">
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
						<div className="row">
							<div className="col-8">
								<input className="form-control" ref={Countdown2} type="number" defaultValue="0" ></input>
							</div>
							<div className="col-4">
								<button className='btn btn-primary' onClick={callHome}>Countdown</button>
							</div>
						</div>
					</div>
					<div className='col-8'>
						<Controls PlayPause={handlePauseToggle} Reset={Reset} counter={counter} />
					</div>
				</div>

			</div>



		);
	}


};

Clock.propTypes = {
	counter: PropTypes.number,

}

export default Clock;
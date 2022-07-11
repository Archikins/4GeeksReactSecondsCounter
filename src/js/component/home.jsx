
import React, { useState, useEffect } from 'react';

//include images into your bundle
import Clock from "./SecondCounter.jsx";

import ReverseClock from "./ReverseClock.jsx";


//create your first component
const Home = (props) => {
	if (props.countdown) {
		return (
			<div className="text-center bg-dark">
				
				<ReverseClock counter={props.counter}  />
			</div>
		);
	} else {
		return (
			<div className="text-center bg-dark">
				
				<Clock counter={props.counter}  />
			</div>
		);
	}
	
};

export default Home;

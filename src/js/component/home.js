import React, { useState, useEffect } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	const [seconds, setSeconds] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setSeconds(seconds => seconds + 1);
		}, 1000);
		return () => clearInterval(interval);
	}, []);

	const [minutes, setMinutes] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setMinutes(minutes => minutes + 1);
		}, 60000);
		return () => clearInterval(interval);
	}, []);
	const [horas, setHoras] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setHoras(horas => horas + 1);
		}, 3600000);
		return () => clearInterval(interval);
	}, []);
	return (
		<div className="text-center">
			<div className="row color">
				<div className="col">
					<h1>Horas</h1>
					<h2>{horas}</h2>
				</div>
				<div className="col">
					<h1>Minutos</h1>
					<h2>{minutes}</h2>
				</div>
				<div className="col">
					<h1>Segundos</h1>
					<h2>{seconds}</h2>
				</div>
			</div>
		</div>
	);
}

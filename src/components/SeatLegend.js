import React, { Fragment } from 'react'

function SeatLegend() {
	return (
		<Fragment>
			{/* Seat Legend */}
			<ul className="showcase">
				<li>
					<div className="seat"></div>
					<small>N/A</small>
				</li>
				<li>
					<div className="seat selected"></div>
					<small>Selected</small>
				</li>
				<li>
					<div className="seat occupied"></div>
					<small>Occupied</small>
				</li>
			</ul>
		</Fragment>
	)
}

export default SeatLegend;

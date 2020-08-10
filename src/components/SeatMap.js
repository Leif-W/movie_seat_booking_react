import React, { Fragment } from 'react'

function SeatMap() {
	return (
		<Fragment>
			{/* Seating Map */}
			<div className="container">
				<div className="screen">
					<p className="screen-text">Screen</p>
				</div>
				{/* Row 1 */}
				<div className="row">
					<div className="seat"></div>
					<div className="seat"></div>
					<div className="seat"></div>
					<div className="seat"></div>
					<div className="seat"></div>
					<div className="seat"></div>
					<div className="seat"></div>
					<div className="seat"></div>
				</div>
				{/* Row 2 */}
				<div className="row">
					<div className="seat"></div>
					<div className="seat"></div>
					<div className="seat"></div>
					<div className="seat occupied"></div>
					<div className="seat occupied"></div>
					<div className="seat"></div>
					<div className="seat"></div>
					<div className="seat"></div>
				</div>
				{/* Row 3 */}
				<div className="row">
					<div className="seat"></div>
					<div className="seat"></div>
					<div className="seat"></div>
					<div className="seat occupied"></div>
					<div className="seat occupied"></div>
					<div className="seat occupied"></div>
					<div className="seat occupied"></div>
					<div className="seat"></div>
				</div>
				{/* Row 4 */}
				<div className="row">
					<div className="seat"></div>
					<div className="seat"></div>
					<div className="seat occupied"></div>
					<div className="seat occupied"></div>
					<div className="seat"></div>
					<div className="seat"></div>
					<div className="seat"></div>
					<div className="seat"></div>
				</div>
				{/* Row 5 */}
				<div className="row">
					<div className="seat"></div>
					<div className="seat"></div>
					<div className="seat occupied"></div>
					<div className="seat occupied"></div>
					<div className="seat occupied"></div>
					<div className="seat"></div>
					<div className="seat"></div>
					<div className="seat"></div>
				</div>
				{/* Row 6 */}
				<div className="row">
					<div className="seat"></div>
					<div className="seat"></div>
					<div className="seat"></div>
					<div className="seat"></div>
					<div className="seat"></div>
					<div className="seat"></div>
					<div className="seat occupied"></div>
					<div className="seat occupied"></div>
				</div>
			</div>
		</Fragment >
	)
}

export default SeatMap;

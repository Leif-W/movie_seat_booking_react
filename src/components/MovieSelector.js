import React, { Fragment } from 'react'

function MovieSelector() {
	return (
		<Fragment>
			{/* Container to hold movie choices */}
			<div className="movie-container">
				<label>Select a movie:</label>
				{/* id of movie to grab on to it in JS */}
				<select id="movie">
					<option value="10">Avengers: Endgame (£10)</option>
					<option value="12">Joker (£12)</option>
					<option value="18">Toy Story 4 3D (£18)</option>
					<option value="18">The Lion King 3D (£18)</option>
				</select>
			</div>
		</Fragment>
	)
}

export default MovieSelector

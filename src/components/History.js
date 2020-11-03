import React from 'react';

const History = ({ history, moveTo, currentMove }) => {
	return (
		<ul>
			{
				history.map( (_, move) => {
					return <li key={move}>
						<button
							style={ {
								fontWeight: move === currentMove ? 600 : 300;
							} }
							type="button"
							onClick={ () => {
								moveTo(move)
							}}>
							{ move === 0 ? 'Start to game' : `Go to ${move}` }
						</button>
					</li>
				})
			}
		</ul>
	)
}

export default History;
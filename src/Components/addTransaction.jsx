import React from 'react';

export default function addTransaction(props) {
	return (
		<div id='transaction-root'>
			{/* Add a transaction */}
			<form>
				<select onChange={props.changeHandler.bind(this)} name='posOrNeg' value={props.posOrNeg}>
					<option value='+'>+</option>
					<option value='-'>-</option>
				</select>

				<label>
					<input
						name='transactionDesc'
						value={props.description}
						placeholder='Description'
						onChange={props.changeHandler.bind(this)}
					/>
				</label>

				<label>
					<input
						name='transactionValue'
						onChange={props.changeHandler.bind(this)}
						value={props.value}
						placeholder='Amount'
					/>
				</label>

				<button onClick={props.submit} type='button'>Submit</button>
			</form>
		</div>
	);
}

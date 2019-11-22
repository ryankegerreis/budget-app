import React from 'react';

export default function addTransaction(props) {
	return (
		<div id='transaction-root'>
			{/* Add a transaction */}
			<form>
				<select>
					<option value='+'>+</option>
					<option value='-'>-</option>
				</select>

				<label>
					<input
						name='transactionDesc'
						value={props.description}
						placeholder='Description'
					/>
				</label>

				<label>
					<input
						name='transactionValue'
						onChange={props.changeHandler}
						value={props.value}
						placeholder='Amount'
					/>
				</label>

				<button type='submit'>Submit</button>
			</form>
		</div>
	);
}

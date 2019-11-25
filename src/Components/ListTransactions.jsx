import React from 'react';
import Transaction from './Transaction';

export default function ListTransactions(props) {
	return (
		<div className='list'>
			<h3 style={{ color: props.color }}>{props.name}</h3>
			{props.transactions.map(eachObject => {
				return (
					<div>
						<Transaction
							description={eachObject.description}
							value={Number(eachObject.value)}
						/>
					</div>
				);
			})}
		</div>
	);
}

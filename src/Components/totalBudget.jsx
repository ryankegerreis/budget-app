import React from 'react';

export default function totalBudget(props) {
	return (
		<div id='total-budget-root'>
			<h2>Available Budget In November</h2>
			<div>
				<h1>
					{props.total >= 0 ? '+' : '-'} {props.total}
				</h1>
			</div>
			<div id='budget-income'>{props.income}</div>
			<div id='budget-expenses'>{props.expenses}</div>
		</div>
	);
}

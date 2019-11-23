import './App.css';
import React, { Component } from 'react';
import Budget from './Components/totalBudget';
import Transaction from './Components/addTransaction';
import List from './Components/ListTransactions'

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			total: 0,
			income: 0,
			expenses: 0,
			incomeTransactions: [],
			expenseTransactions: [],
			posOrNeg: '+',
			transactionDesc: '',
			transactionValue: 0
		};
		this.changeHandler = this.changeHandler.bind(this);
		this.submitHandler = this.submitHandler.bind(this);
	}

	changeHandler(e) {
		this.setState({ [e.target.name]: e.target.value });
	}

	submitHandler() {
		if (this.state.posOrNeg === '+') {
			let newArr = this.state.incomeTransactions.concat({ description: this.state.transactionDesc, value: this.state.transactionValue });
			this.setState({
				...this.state,
				incomeTransactions: newArr,
				income: this.state.income + this.state.transactionValue,
				total: this.state.total + this.state.transactionValue,
				transactionDesc: '',
				transactionValue: 0
			})
		} else {
			let newArr = this.state.expenseTransactions.concat({ description: this.state.transactionDesc, value: this.state.transactionValue });
			this.setState({
				...this.state,
				expenseTransactions: newArr,
				expenses: this.state.income + this.state.transactionValue,
				total: this.state.total - this.state.transactionValue,
				transactionDesc: '',
				transactionValue: 0
			})
		}
	}

	render() {
		return (
			<div id='root'>
				<div id='section1'>
					<Budget
						total={this.state.total}
						income={this.state.income}
						expenses={this.state.expenses}
					/>
				</div>
				<div id='section2'>
					<Transaction
						value={this.state.transactionValue}
						description={this.state.transactionDesc}
						changeHandler={e => this.changeHandler(e)}
						posOrNeg={this.state.posOrNeg}
						submit={this.submitHandler}
					/>
					<div id='list-container'>
						<List name='Income' transactions={this.state.incomeTransactions} />
						<List name='Expenses' transactions={this.state.expenseTransactions} />
					</div>
				</div>
			</div>
		);
	}
}

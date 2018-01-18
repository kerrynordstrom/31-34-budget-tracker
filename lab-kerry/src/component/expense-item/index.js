import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from '../expense-form';
import * as expense from '../../action/expense';

class ExpenseItem extends React.Component {
	render() {
		let { 
			expense,
			expenseUpdate, 
			expenseRemove 
		} = this.props;

		return (
			<div className='single-expense'>
				<p>{expense.name}: ${expense.price}</p>
				<button onClick={() => expenseRemove(expense)}> Delete </button>
				<ExpenseForm
					expense={expense}
					onComplete={expenseUpdate}
				/>
			</div>
		);
	};
} 

let mapDispatchToProps = (dispatch) => {
	return {
		expenseUpdate: (data) => dispatch(expense.updateAction(data)),
		expenseRemove: (data) => dispatch(expense.removeAction(data)),
	}
};

export default connect(null, mapDispatchToProps)(ExpenseItem);
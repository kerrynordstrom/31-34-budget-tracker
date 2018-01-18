import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from '../expense-form';
import * as expense from '../../action/expense';

class ExpenseItem extends React.Component {
	render() {
		let { 
			expense, 
			onUpdate, 
			onRemove 
		} = this.props;

		return (
			<div className='single-expense'>
				<h2>{expense.content}</h2>
				<button onClick={() => onRemove(expense)}> Delete </button>
				<ExpenseForm
					expense={expense}
					onComplete={onUpdate}
				/>
			</div>
		);
	};
} 

let mapStateToProps = (state) => {
	return ({});
};

let mapDispatchToProps = (dispatch) => {
	return {
		expenseUpdate: (data) => dispatch(expense.updateAction(data)),
		expenseRemove: (data) => dispatch(expense.removeAction(data)),
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseItem);
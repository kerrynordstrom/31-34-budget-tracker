import React from 'react';
import {connect} from 'react-redux';
import ExpenseItem from '../expense-item';
import CategoryForm from '../category-form';
import ExpenseForm from '../expense-form';

import * as expenseActions from '../../action/expense';
import * as categoryActions from '../../action/category';

class CategoryItem extends React.Component {
	render () {
		let {
			expenses,
			category,
			expenseCreate, 
			categoryUpdate, 
			categoryRemove
		} = this.props;

		let categoryExpenses = expenses[category.id];

		return (
			<div className='category-item'>
				<h2>{category.name}: ${category.budget}</h2>
				<button onClick={() => categoryRemove(category)}> Delete </button>
				<CategoryForm 
					category={category}
					onComplete={categoryUpdate}
					/>
				<ExpenseForm 
				category={category}
				onComplete={expenseCreate} />

				{
					categoryExpenses.map((expense, index) => 
				<ExpenseItem
				key={index}
				expense={expense} />)
				}
			</div>
		);
	};
}

let mapStateToProps = (state) => ({
	expenses: state.expenses,
});

let mapDispatchToProps = (dispatch) => ({	
	expenseCreate: (data) => dispatch(expenseActions.createAction(data)),
	categoryUpdate: (data) => dispatch(categoryActions.updateAction(data)),
	categoryRemove: (data) => dispatch(categoryActions.removeAction(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem);
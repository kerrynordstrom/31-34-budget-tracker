import React from 'react';

let emptyState = {
	content: ''
};

class Expense extends React.Component {
	constructor(props) {
		super(props);
		this.state = this.props.expense || emptyState;

		let memberFunctions = Object.getOwnPropertyNames(CategoryForm.prototype);
		for (let functionName of memberFunctions) {
			if (functionName.startsWith('handle')) {
				this[functionName] = this[functionName].bind(this);
			}
		}
	}

	handleChange(event) {
		let { name, value } = event.target;
		this.setState({ [name]: value });
	}

	handleSubmit(event) {
		event.preventDefault();
		let categoryID = this.props.category ? this.props.category.id : this.props.expense.sectionID;
		this.props.onComplete({
			...this.state,
			categoryID,
		});
		this.setState(emptyState);
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.expense)
			this.setState(nextProps.expense);
	}

	render() {
		let buttonText = this.props.expense ? 'Update Expense' : 'Create Expense';

		return (
			<form
				onSubmit={this.handleSubmit}
				className='expense-form'>

				<input
					type='text'
					name='content'
					placeholder='content'
					value={this.state.content}
					onChange={this.handleChange}
				/>

				<button type='submit'> {buttonText} </button>
			</form>
		);
	}
}

export default ExpenseForm;
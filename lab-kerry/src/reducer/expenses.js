let emptyState = {};

export default(state = emptyState, action) => {
	let {type, payload} = action;
	let categoryID, categoryExpenses, updatedExpenses;
	
	switch(type) {
		case 'CATEGORY_CREATE':
			return {...state, [payload.id]: []}
		case 'CATEGORY_REMOVE':
			let updatedState = {...state};
			delete updatedState[payload.id];
			return updatedState;
		case 'EXPENSE_CREATE':
			categoryID = payload.categoryID;
			categoryExpenses = state[categoryID];
			updatedExpenses = [...categoryExpenses, payload]
		
			return {...state, [categoryID]: updatedExpenses};
		case 'EXPENSE_UPDATE':
			categoryID = payload.categoryID;
			categoryExpenses = state[categoryID];
			updatedExpenses = categoryExpenses.map(
				expense => expense.id === payload.id ? payload : expense);

			return {...state, [categoryID]: updatedExpenses};
		case 'EXPENSE_REMOVE':
			categoryID = payload.categoryID;
			categoryExpenses = state[categoryID];
			updatedExpenses = categoryExpenses.filter(
				expense => expense.id !== payload.id);

			return {...state, [categoryID]: updatedExpenses};

		case 'EXPENSE_UPDATE_CATEGORY_ID': 
			//Setting helper variables to keep track of expenses to be moved
			let expense = payload.expense;
			let oldCategoryId = expense.categoryID;

			//Setting up categoryID change
			if(oldCategoryID === payload.categoryID)
				return state;
			
			//Updating section array
			let oldCategory = state[oldCategoryID].filter(foo => foo.id !== expense.id);

			expense.categoryID = payload.categoryID;

			//Adding the expense to its new category
			let newCategory = [expense, ...state[payload.categoryID]];

			return {
				...state,
				[oldCategoryID]: oldCategory,
				[expense.categoryID]: newCategory,
			}
		default:
			return state;
	}
};
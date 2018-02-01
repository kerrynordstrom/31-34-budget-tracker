import uuid from 'uuid';

export const createAction = ({ description, price, categoryID }) => ({
	type: 'EXPENSE_CREATE',
	payload: {
		description,
		price,
		categoryID,
		id: uuid.v1(),
		timestamp: new Date(),
	}
});

export const updateAction = (expense) => ({
	type: 'EXPENSE_UPDATE',
	payload: expense,
});

export const removeAction = (expense) => ({
	type: 'EXPENSE_REMOVE',
	payload: expense,
});

export const updateCategoryID = (expense, categoryID) => ({
	type: 'EXPENSE_UPDATE_CATEGORY_ID',
	payload: {expense, categoryID},
})
export const createAction = ({ content, categoryID }) => ({
	type: 'EXPENSE_CREATE',
	payload: {
		content,
		categoryID,
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
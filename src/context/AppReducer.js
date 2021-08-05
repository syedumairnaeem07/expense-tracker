//* To handle changes in our Global State in response of some action

export const AppReducer = (state, action) => {
	switch (action.type) {
		case "ADD_TRANSACTION": {
			return {
				...state,
				transactions: [action.payload, ...state.transactions],
			};
		}
		case "DELETE_TRANSACTION": {
			return {
				...state,
				transactions: state.transactions.filter(
					(transaction) => transaction.id !== action.payload
				),
			};
		}
		default:
			return state;
	}
};

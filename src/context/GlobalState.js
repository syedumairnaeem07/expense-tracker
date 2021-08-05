import { createContext, useReducer } from "react";
import { AppReducer } from "./AppReducer";

//*Set Initial State
const initialState = {
	transactions: [],
};

//*Create GlobalContext
export const GlobalContext = createContext(initialState);

//*Create Provider (In order to provide components access to global state)
//* children are basically components wrapped inside Provider
export const GlobalProvider = ({ children }) => {
	//* dispatch is required to work with useReducer
	const [state, dispatch] = useReducer(AppReducer, initialState);

	//*Action
	function addTransaction(transaction) {
		dispatch({
			type: "ADD_TRANSACTION",
			payload: transaction,
		});
	}

	function deleteTransaction(id) {
		dispatch({
			type: "DELETE_TRANSACTION",
			payload: id,
		});
	}

	return (
		<GlobalContext.Provider
			value={{
				transactions: state.transactions,
				deleteTransaction,
				addTransaction,
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};

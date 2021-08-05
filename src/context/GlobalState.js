import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

//*Set Initial State
const initialState = {
	transactions: [
		{ id: 1, text: "Flower", amount: -20 },
		{ id: 2, text: "Salary", amount: 300 },
		{ id: 3, text: "Book", amount: -10 },
		{ id: 4, text: "Camera", amount: 150 },
	],
};

//*Create GlobalContext
export const GlobalContext = createContext(initialState);

//*Create Provider (In order to provide components access to global state)
//* children are basically components wrapped inside Provider
export const GlobalProvider = ({ children }) => {
	//* dispatch is required to work with useReducer
	const [state, dispatch] = useReducer(AppReducer, initialState);

	return (
		<GlobalContext.Provider
			value={{
				transactions: state.transactions,
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};

import { createContext, useReducer } from "react";

export const QuotesContext = createContext();

export const quotesReducer = (state, action) => {
  switch (action.type) {
    case 'SET_QUOTES':
      return {
        quotes: action.payload || [] 
      };

    case 'CREATE_QUOTE':
      return {
        quotes: [action.payload, ...state.quotes]
      };

      case 'DELETE_QUOTE':
        return {
            quotes: state.quotes.filter( (q) => q._id !== action.payload._id )
        };

    default:
      return state;
  }
};

export const QuotesContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(quotesReducer, {
    quotes: [] // Initialize as an empty array
  });

  return (
    <QuotesContext.Provider value={{ ...state, dispatch }}>
      {children}
    </QuotesContext.Provider>
  );
};

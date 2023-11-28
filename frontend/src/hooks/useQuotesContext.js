import { QuotesContext } from "../context/QuoteContext";
import { useContext } from "react";

export const useQuotesContext = () => {
  const context = useContext(QuotesContext);

  if (!context) {
    throw new Error('useQuotesContext must be used within a QuotesContextProvider');
  }

  return context;
};

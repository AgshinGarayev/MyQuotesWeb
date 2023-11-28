import { useAuthContext } from "./useAuthContext"
import { useQuotesContext } from "./useQuotesContext"


export const useLogout = () =>{

    const {dispatch} = useAuthContext()
    const { dispatch: quoteDispatch } = useQuotesContext()

    const logout = () =>{
        //remove user from storage
        localStorage.removeItem('user')
        //dispatch logout action
        dispatch({type: 'LOGOUT'})

        quoteDispatch({ type: 'SET_QUOTES', payload: null })
    }

    return {logout}
}
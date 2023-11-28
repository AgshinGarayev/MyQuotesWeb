import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { json } from "react-router-dom";

export const useRegister = () =>{
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const {dispatch} = useAuthContext()

    const register = async(username,email,password) => {
        setIsLoading(true)
        setError(null)

        const response = await fetch('http://localhost:3003/api/users/register', {
            method:'Post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({username,email,password})
        })

        const json = await response.json()

        if(!response.ok){
            setIsLoading(false)
            setError(json.error)
        }

        if(response.ok){
            //save the user to local storage
            localStorage.setItem('user', JSON.stringify(json))
            //update the auth context
            dispatch({type:'LOGIN', payload: json})
            setIsLoading(false)
        }

    }

    return {register,isLoading,error}

}

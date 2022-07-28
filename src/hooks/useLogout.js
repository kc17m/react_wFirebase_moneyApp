import { useState } from "react"
import { projectAuth } from "../firebase/config" //from firebase to use built in Auth Service
import { useAuthContext } from "./useAuthContext" //custom Auth hook

export const useLogout = () => {
    const [error, setError] = useState(null)
    const [isPending, setIsPending ] = useState(false)
    const {dispatch} = useAuthContext()

    const logout = async () => {
        setError(null)
        setIsPending(true)

        //sign the user out
        try {
            await projectAuth.signOut()

            //dispatch logout function
            dispatch({type: "LOGOUT"}) //payload can be skipped, cause user will be null after logout
            
            setIsPending(false)
            setError(null)
        }
        catch(err) {
           console.log(err.message)
           setError(err.message)
           setIsPending(false) 
        }
    }
    return {logout, error, isPending}
}
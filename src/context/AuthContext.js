import { createContext, useReducer } from "react";

export const AuthContext = createContext()
 
 //authReducer takes initial state and action type as args, returns new state
 //Login should automatically happen in Signup
 //---> we use this dispatch in useSignup hook
export const authReducer = (state, action) => {
    switch (action.type) {
        //cases....
        case "LOGIN": 
            return {...state, user: action.payload}
        case "LOGOUT":
            return {...state, user: null} 
        default:
            return state
    }
};


//context provider const function takes the reduser and returns context wrapper for children below
export const AuthContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(authReducer, {
        user: null
    })

    console.log("AuthContext state: ", state)


    //recap: dispatch function takes 1.type as argument (STRING in all caps) and 2. payload:
    //dispatch({type: "LOG_IN"})
    //payload: data to base state change on

    return (
        <AuthContext.Provider value={{...state, dispatch}}>
            {children}
        </AuthContext.Provider>
      );
}
 

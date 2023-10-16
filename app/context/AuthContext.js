"use client"
import {createContext, useContext, useState} from "react";


const AuthContext = createContext(null);

export const GlobalContextProvider = ({children}) => {

    // login
  const [ userEmail , setUserEmail ] = useState("");
  const [ userPassword , setUserPassword ] = useState("");

  // using token to check if user exists
  const [token , setToken] = useState(false);

  // signUp
  const [firstName , setFirstName] = useState("");
  const [lastName , setLastName] = useState("");
  const [gender , setGender] = useState("");

  // forgotPassword
  const [newPassword, setNewPassword] = useState("");  
  
  
  const userData = {
    userEmail, setUserEmail, userPassword, setUserPassword,
    firstName, setFirstName, lastName, setLastName, gender, setGender,newPassword,setNewPassword, token , setToken
  }
  console.log(userEmail)

    return (
        <AuthContext.Provider value={userData}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthContext;

export const useGlobalContext = () => useContext(AuthContext);

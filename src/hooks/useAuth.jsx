import { useContext } from "react"
import { authContext } from "../auth/AuthProvider/AuthProvider";

const useAuth = () =>{
    const context = useContext(authContext);
    return context
}

export default useAuth;
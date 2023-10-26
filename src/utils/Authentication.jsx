import { Navigate } from "react-router-dom";


const Authentication = ({children}) => {
    const user = localStorage.getItem("user");
    if(!user) {
        return <Navigate to = "/register" /> 
    }
    return (
        <>
            {children}
        </>
    )
}

export default Authentication

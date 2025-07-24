import {Outlet, Navigate} from "react-router-dom"



const ProtectedRoutes = () => {
    const user = 1;

    return user ? <Outlet/> : <Navigate to="/adminLogin"/>
}


export default ProtectedRoutes;
import {Outlet, Navigate} from "react-router-dom"
import Cookies from "js-cookie";



const ProtectedRoutes = () => {
    

    return Cookies.get("user") ? <Outlet/> : <Navigate to="/adminLogin"/>
}


export default ProtectedRoutes;
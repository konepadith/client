import { getUsername } from "./service/authorize";
import {Outlet, Navigate} from"react-router-dom";

const AdminRoute=()=>{
    let auth =getUsername()
    return(
        auth ? <Outlet/> : <Navigate to={'/login'}/>
    )
}
export default AdminRoute
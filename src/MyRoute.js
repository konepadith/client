import { BrowserRouter,Routes,Route,Navigate } from "react-router-dom";
import App from "./App";
import FormCompoent from "./conponents/FormComponent";
import NotFound from "./conponents/NotFound";
import NavbarComponent from "./conponents/NavbarComponent";
import SingleComponent from "./conponents/SingleComponent"
const MyRoute=()=>{
    return(
        <BrowserRouter>
        <NavbarComponent/>
        <Routes>
            <Route path="/" element={<App/>}></Route>
            <Route path="/create" element={<FormCompoent/>}></Route>  
            <Route path="*" element={<NotFound/>}></Route> 
            <Route path="/blog/:slug" element={<SingleComponent/>}></Route>
        </Routes>
        </BrowserRouter>
    )
}

export default MyRoute
import { BrowserRouter,Routes,Route } from "react-router-dom";
import App from "./App";
import FormCompoent from "./conponents/FormComponent";
import NotFound from "./conponents/NotFound";
import NavbarComponent from "./conponents/NavbarComponent";
import SingleComponent from "./conponents/SingleComponent";
import EditComponent from "./conponents/EditComponent";
const MyRoute=()=>{
    
    return(
        <BrowserRouter>
        <NavbarComponent/>
        <Routes>
            <Route path="/" element={<App/>}></Route>
            <Route path="/create" element={<FormCompoent/>}></Route>  
            <Route path="*" element={<NotFound/>}></Route> 
            <Route path="/blog/:slug" element={<SingleComponent/>}></Route>
            <Route path="/blog/edit/:slug" element={<EditComponent/>}></Route>
        </Routes>
        </BrowserRouter>
    )
}

export default MyRoute
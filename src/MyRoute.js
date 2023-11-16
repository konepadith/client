import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import FormCompoent from "./conponents/FormComponent";
import NotFound from "./conponents/NotFound";

import SingleComponent from "./conponents/SingleComponent";
import EditComponent from "./conponents/EditComponent";
import LoginComponent from "./conponents/LoginComponent";

import AdminRoute from "./AdminRoute";
const MyRoute = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route element={<AdminRoute />}>
                    <Route element={<FormCompoent />} path="/create" exact />
                    <Route element={<EditComponent />} path="/blog/edit/:slug" exact />
                </Route>
                <Route path="*" element={<NotFound />} />
                <Route path="/blog/:slug" element={<SingleComponent />} />
                <Route path="/login" element={<LoginComponent />} />
            </Routes>
        </BrowserRouter>
    )
}

export default MyRoute
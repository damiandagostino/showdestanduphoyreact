import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages";
import { Category } from "../pages";
import { Item } from "../pages";
import { NavBarComponent } from "../components";

export const MainRoutes = () => {
    return (
        <BrowserRouter>
            <NavBarComponent />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/category/:categoryId' element={<Category />} />
                <Route path="/item/:id" element={<Item />} />
            </Routes>
        </BrowserRouter>
    );
}
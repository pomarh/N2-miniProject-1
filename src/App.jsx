import { Route, Routes } from "react-router-dom";
import SearchBar from "./components/SearchBar";
import Home from "./pages/home";
import ProductCategory from "./pages/ProductCategory";
import ProductPage from "./pages/ProductPage";
import FilterCategory from "./FilterCategory";

function App() {
    return (
        <div>
            <SearchBar />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/ProductCategory" element={<ProductCategory />}></Route>
                <Route path="/ProductPage/:idProduct" element={<ProductPage />}></Route>
                <Route path="/category" element={<FilterCategory />}></Route>
            </Routes>
        </div>
    );
}

export default App;

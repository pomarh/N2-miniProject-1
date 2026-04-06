import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import SearchBar from "./components/SearchBar";
import Home from "./pages/Home";
import ProductCategory from "./pages/ProductCategory";
import ProductPage from "./pages/ProductPage";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";

function App() {
    const [searchTerm, setSearchTerm] = useState("");
    return (
        <div>
            <SearchBar setSearchTerm={setSearchTerm} />
            <Routes>
                <Route path="/" element={<Home searchTerm={searchTerm} />}></Route>
                <Route path="/ProductCategory/:nameCategory" element={<ProductCategory />}></Route>
                <Route path="/ProductPage/:idProduct" element={<ProductPage />}></Route>
                <Route path="*" element={<NotFound />}></Route>
            </Routes>
            <Footer />
        </div>
    );
}

export default App;

import { Route, Routes } from "react-router-dom";
import SearchBar from "./components/SearchBar";
import Home from "./pages/home";
import ProductCategory from "./pages/ProductCategory";
import ProductPage from "./pages/ProductPage";
import Footer from "./components/Footer";

function App() {
    return (
        <div>
            <SearchBar />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/ProductCategory/:nameCategory" element={<ProductCategory />}></Route>
                <Route path="/ProductPage/:idProduct" element={<ProductPage />}></Route>
            </Routes>
            <Footer />
        </div>
    );
}

export default App;

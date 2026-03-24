import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import ShopCategory from "../components/ShopCategory";

function Home({ searchTerm }) {
    return (
        <>
            <Header />
            <ProductCard searchTerm={searchTerm} />
            <ShopCategory />
        </>
    );
}

export default Home;

import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NotFound from "../pages/NotFound";

function ProductCard({ searchTerm }) {
    const [productList, setProductList] = useState([]);
    const [allProduct, setAllProduct] = useState(false);
    const [filterProduct, setFilterProduct] = useState([]);
    const [loadingcard, setLoadingCard] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);

    useEffect(() => {
        async function callProduct() {
            try {
                const { data } = await axios.get("https://fakestoreapi.com/products");
                setProductList(data);
                setFilterProduct(data);
            } catch (error) {
                console.log("Algo salio mal:", error);
                setErrorMessage(`${error.message}`);
            } finally {
                setLoadingCard(false);
            }
        }
        callProduct();
    }, []);

    useEffect(() => {
        const result = productList.filter((item) => item.category.toLowerCase().includes(searchTerm.toLowerCase()));
        setFilterProduct(result);
    }, [searchTerm, allProduct]);

    const buttonMore = () => {
        setAllProduct(!allProduct);
    };

    buttonMore;

    if (errorMessage) {
        return <NotFound errorM={errorMessage} />;
    }

    return (
        <>
            {loadingcard ? (
                <CardSkeleton />
            ) : (
                <main className="font-family-montserrat m-5">
                    <div className="truncate">
                        <div className="h-15 text-xl capitalize flex justify-between items-center">
                            <p>New arrivals</p>
                            <button className="text-bluetext " onClick={buttonMore}>
                                {allProduct ? "go to back" : "see all +"}
                            </button>
                        </div>
                        <div className="grid grid-cols-2 gap-2 md:mx-25 md:gap-20 lg:mx-0 lg:grid lg:grid-cols-4">
                            {filterProduct.slice(0, allProduct ? productList.length : 4).map((product) => (
                                <Link key={product.id} to={`/ProductPage/${product.id}`} className=" ">
                                    <div className="flex flex-col gap-2 h-full">
                                        <div className="w-full h-full rounded-lg">
                                            <img className="w-full h-full" src={product.image} alt="" />
                                        </div>
                                        <div>
                                            <p className="truncate">{product.title}</p>
                                            <p className="font-bold capitalize">{product.category}</p>
                                            <p className="text-bluetext">${product.price}</p>
                                        </div>
                                        <button className="flex justify-center items-center gap-2 bg-black text-white py-2 px-4 text-[12px] rounded-lg">
                                            <img className="w-5 h-5 bg-amber-300" src="/cart-black-icon.png" alt="" /> add to cart
                                        </button>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </main>
            )}
        </>
    );
}
export default ProductCard;

/**
 * Purpose: Loading Skeleton for the card links
 * @param {} none
 * @returns {object} ReactNode of Skeleton
 */

function CardSkeleton() {
    return (
        <div className="grid grid-cols-2 gap-2 lg:grid-cols-4 place-items-center lg:gap-2 mt-10">
            <div className="w-40 h-80 md:w-60 md:h-100 lg:w-72.5 lg:h-135 bg-gray-200 rounded-xl animate-pulse"></div>
            <div className="w-40 h-80 md:w-60 md:h-100 lg:w-72.5 lg:h-135 bg-gray-200 rounded-xl animate-pulse"></div>
            <div className="w-40 h-80 md:w-60 md:h-100 lg:w-72.5 lg:h-135 bg-gray-200 rounded-xl animate-pulse"></div>
            <div className="w-40 h-80 md:w-60 md:h-100 lg:w-72.5 lg:h-135 bg-gray-200 rounded-xl animate-pulse"></div>
        </div>
    );
}

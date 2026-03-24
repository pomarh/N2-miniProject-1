import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ProductCard() {
    const [productList, setProductList] = useState([]);
    const [allProduct, setAllProduct] = useState(false);

    useEffect(() => {
        async function callProduct() {
            try {
                const { data } = await axios.get("https://fakestoreapi.com/products");
                setProductList(data);
            } catch (error) {
                console.log("Algo salio mal:", error);
            }
        }
        callProduct();
    }, []);

    const buttonMore = () => {
        setAllProduct(!allProduct);
    };

    buttonMore;

    return (
        <main className="font-family-montserrat m-5">
            <div className="truncate">
                <div className="h-15 text-xl capitalize flex justify-between items-center">
                    <p>New arrivals</p>
                    <button className="text-bluetext " onClick={buttonMore}>
                        {allProduct ? "go to back" : "see all +"}
                    </button>
                </div>
                <div className="grid grid-cols-2 gap-2 md:mx-25 md:gap-20 lg:mx-0 lg:grid lg:grid-cols-4">
                    {productList.slice(0, allProduct ? productList.lenght : 4).map((product) => (
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
    );
}
export default ProductCard;

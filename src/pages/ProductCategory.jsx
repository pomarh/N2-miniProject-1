import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function ProductCategory() {
    const { nameCategory } = useParams();
    const [filterProduct, setFilterProduct] = useState([]);

    useEffect(() => {
        async function filterProductCart() {
            try {
                const { data } = await axios.get(`https://fakestoreapi.com/products/category/${nameCategory}`);
                setFilterProduct(data);
            } catch (error) {
                console.log("Algo salio mal:", error);
            }
        }
        if (nameCategory) filterProductCart();
    }, [nameCategory]);
    return (
        <>
            <div>
                <h2 className="mx-10 my-5 text-2xl font-bold capitalize">Category: {nameCategory}</h2>
                <div className=" m-10 flex flex-col gap-15 md:grid md:grid-cols-2 lg:grid lg:grid-cols-4">
                    {filterProduct.map((product) => (
                        <Link key={product.id} to={`/ProductPage/${product.id}`}>
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
        </>
    );
}

export default ProductCategory;

import axios from "axios";
import { useEffect, useState } from "react";
import Footer from "./Footer";

function ShopCategory() {
    const [categoryShop, setCategoryShop] = useState([]);

    const categoryIcon = {
        electronics: "/microchip-icon.svg",
        jewelery: "/bag-icon.svg",
        "men's clothing": "/man-toilet-icon.svg",
        "women's clothing": "/women-toilet-icon.svg",
    };

    useEffect(() => {
        async function callCategory() {
            try {
                const { data } = await axios.get(`https://fakestoreapi.com/products/categories`);
                setCategoryShop(data);
            } catch (error) {
                console.log("Algo salio mal:", error);
            }
        }
        callCategory();
    }, []);

    return (
        <section className="p-5 bg-[#EAEDF8]">
            <div>
                <p className="text-2xl font-semibold">Shop by Category</p>
            </div>
            <div className="flex items-center gap-1 overflow-x-auto scrollbar-hide pb-4 md:justify-center">
                {categoryShop.map((categories, index) => {
                    const iconSrc = categoryIcon[categories] || "/home-icon.svg";

                    return (
                        <div
                            key={index}
                            className="px-5 w-40 h-40 flex flex-col justify-center md:flex md:flex-col md:justify-center md:items-center">
                            <div className="w-20 h-20 rounded-full bg-white flex justify-center items-center">
                                <img className="w-10 h-10" src={iconSrc} alt={`icon de ${categories}`} />
                            </div>
                            <p className="text-center whitespace-nowrap truncate pt-2">{categories}</p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export default ShopCategory;

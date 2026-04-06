import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function ProductPage() {
    const { idProduct } = useParams();
    const [productCart, setProductCart] = useState([]);
    const navigate = useNavigate();
    const [loadingcard, setLoadingCard] = useState(true);

    useEffect(() => {
        async function callProductCart() {
            try {
                const { data } = await axios.get(`https://fakestoreapi.com/products/${idProduct}`);
                setProductCart(data);
            } catch (error) {
                console.log("Algo salio mal:", error);
            } finally {
                setLoadingCard(false);
            }
        }
        callProductCart();
    }, []);

    const buttonClose = () => {
        navigate(-1);
    };

    buttonClose;
    return (
        <>
            {loadingcard ? (
                <CardSkeleton />
            ) : (
                <div className="flex flex-col gap-4 m-10 md:my-20 md:mx-50 lg:mx-130">
                    <button onClick={buttonClose} className="text-4xl font-extrabold text-right">
                        ✕
                    </button>
                    <p className="font-bold capitalize text-xl">{productCart.category}</p>
                    <div className="w-full h-full rounded-lg">
                        <img className="w-full h-full md:w-60 md:m-auto lg:w-80 lg:m-auto " src={productCart.image} alt="" />
                    </div>
                    <div className="mb-5">
                        <p className="text-xl">{productCart.title}</p>
                        <div className="flex justify-between items-center my-2">
                            <p className="text-bluetext">${productCart.price}</p>
                            <p>⭐ {productCart.rating?.rate}</p>
                        </div>

                        <p className="text-xl text-gray-600">{productCart.description}</p>
                    </div>
                    <button className="flex justify-center items-center gap-2 bg-black text-white py-2 px-4 text-[12px] rounded-lg lg:w-60 lg:m-auto">
                        <span className="w-7 h-7 bg-gray-200 rounded-full flex justify-center items-center">
                            <img className="w-5 h-5" src="/cart-black-icon.png" alt="" />
                        </span>
                        add to cart
                    </button>
                </div>
            )}
        </>
    );
}

export default ProductPage;

/**
 * Purpose: Loading Skeleton for the card links
 * @param {} none
 * @returns {object} ReactNode of Skeleton
 */

function CardSkeleton() {
    return (
        <div className="grid grid-cols-1 place-items-center gap-6 lg:">
            <div className="w-73.75 h-215.75 bg-gray-200 rounded-xl animate-pulse"></div>
        </div>
    );
}

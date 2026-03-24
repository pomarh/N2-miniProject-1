import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function ProductPage() {
    const { idProduct } = useParams();
    const [productCart, setProductCart] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        async function callProductCart() {
            try {
                const { data } = await axios.get(`https://fakestoreapi.com/products/${idProduct}`);
                setProductCart(data);
            } catch (error) {
                console.log("Algo salio mal:", error);
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
            <div className="flex flex-col gap-4 m-10 md:my-20 md:mx-30">
                <button onClick={buttonClose} className="text-4xl font-extrabold text-right">
                    ✕
                </button>
                <p className="font-bold capitalize text-xl">{productCart.category}</p>
                <div className="w-full h-full rounded-lg">
                    <img className="w-full h-full lg:w-80 lg:m-auto " src={productCart.image} alt="" />
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
                    <img className="w-5 h-5 bg-amber-300" src="/cart-black-icon.png" alt="" /> add to cart
                </button>
            </div>
        </>
    );
}

export default ProductPage;

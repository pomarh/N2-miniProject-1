import axios from "axios";
import { useEffect, useState } from "react";

function FilterCategory() {
    const [filterProduct, setFilterProduct] = useState([]);

    useEffect(() => {
        async function filterProductCart() {
            try {
                const { data } = await axios.get("https://fakestoreapi.com/products/categories");
                setFilterProduct(data);
            } catch (error) {
                console.log("Algo salio mal:", error);
            }
        }
        filterProductCart;
    }, []);
    return (
        <>
            <div>
                <p>categorias</p>
                {console.log(filterProduct)}
            </div>
        </>
    );
}

export default FilterCategory;

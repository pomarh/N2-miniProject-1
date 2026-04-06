import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <>
            <div className="w-full h-full flec flex-col justify-center items-center">
                <p className="text-5xl  font-extrabold">404</p>
                <p className="text-5xl">OH!!! La pagina que esta buscando no existe o tiene algunos problemas para cargar</p>
                <Link to="/">
                    <p className="text-3xl text-blue-400">volver al inicio</p>
                </Link>
            </div>
        </>
    );
};

export default NotFound;

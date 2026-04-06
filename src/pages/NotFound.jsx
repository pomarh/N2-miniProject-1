import React from "react";
import { Link } from "react-router-dom";

const NotFound = (props) => {
    return (
        <>
            <div className="fixed top-0 left-0 w-screen h-screen bg-white z-9999 flex flex-col justify-center items-center px-50">
                <p className="text-center">{props.errorM}</p>
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

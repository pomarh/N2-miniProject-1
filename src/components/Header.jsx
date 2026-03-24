import SearchBar from "./SearchBar";

function Header() {
    return (
        <header>
            <div className="bg-[url('img-hero.png')] bg-cover md:bg-[url('img-hero-lg.png')] md:bg-cover md:bg-center">
                <div className="w-12/12 h-140 bg-black/60 flex flex-col justify-center items-center text-cente md:h-95 md:bg-black/60 lg:w-80 lg:h-90 lg:mx-10 ">
                    <p className="text-bluetext text-ms font-semibold uppercase font-family-montserrat">new colleccion 2024</p>
                    <div>
                        <h1 className="text-4xl font-extrabold text-white capitalize mt-5 flex flex-col md:flex md:flex-col">
                            redifine your <span className="lg:text-bluetext">everyday style</span>{" "}
                        </h1>
                    </div>
                    <p className="text-sm mt-5 text-center text-gray-300">
                        Discover our curated collection of premium essentials designed for the modern lefestyle
                    </p>
                    <div className="flex flex-col my-5 gap-2 md:flex md:flex-row">
                        <button className="w-67 h-15 bg-bluetext text-ms rounded-lg text-white capitalize lg:w-40 lg:h-12">shop collection</button>
                        <button className="w-67 h-15 bg-gray-600/40 border border-gray-500 text-ms rounded-lg text-white capitalize lg:w-40 lg:h-12">
                            view look book
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;

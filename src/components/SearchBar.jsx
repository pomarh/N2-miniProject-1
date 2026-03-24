import { useState } from "react";
import { Link } from "react-router-dom";

function SearchBar() {
    const [menu, setMenu] = useState(false);
    const [search, setSearch] = useState(false);

    const closeMenu = () => {
        setMenu(false);
        setSearch(false);
    };
    function buttomMenu() {
        setMenu(!menu);
    }

    function buttomSearch() {
        setSearch(!search);
    }
    return (
        <>
            <nav className="w-12/12 h-15 flex justify-between items-center bg-bgfirst px-5 relative">
                <div className="">
                    <div className="hover:cursor-pointer text-2xl lg:hidden" onClick={buttomMenu}>
                        {menu ? "✕" : "☰"}
                    </div>
                    <div
                        className={`${menu ? "block" : "hidden"} absolute left-0 top-full w-full flex flex-col gap-5 bg-gray-100  p-5 text-center lg:flex lg:flex-row lg:gap-4 lg:gap-2 lg:bg-transparent lg:static`}>
                        <Link to="/ProductCategory/electronics" onClick={closeMenu} className="h-8 text-xl hover:text-bluetext">
                            electronics
                        </Link>
                        <Link to="/ProductCategory/jewelery" onClick={closeMenu} className="h-8 text-xl hover:text-bluetext">
                            jewelery
                        </Link>
                        <Link to="/ProductCategory/men's clothing" onClick={closeMenu} className="h-8 text-xl hover:text-bluetext">
                            men's
                        </Link>
                        <Link to="/ProductCategory/women's clothing" onClick={closeMenu} className="h-8 text-xl hover:text-bluetext">
                            women's
                        </Link>
                    </div>
                </div>
                <div>
                    <Link to="/">
                        <p className="text-2xl text-bluetext font-extrabold w-50 text-center">LUXE</p>
                    </Link>
                </div>
                <div className="flex">
                    <img className="w-5 h-5" src="/search-icon.png" alt="search" onClick={buttomSearch} />
                    <input
                        className={`${search ? "block" : "hidden"} absolute left-0 top-full w-full bg-amber-100 h-10 px-5 m-auto lg:block lg:static lg:w-48 lg:h-auto   lg:ml-2 lg:px-2`}
                        type="text"
                    />
                </div>
                <div>
                    <img className="w-5 h-5" src="/heart-icon.png" alt="heart" />
                </div>
            </nav>
        </>
    );
}
export default SearchBar;

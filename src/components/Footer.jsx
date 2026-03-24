function Footer() {
    return (
        <footer className=" h-15 flex flex-col justify-center items-center md:flex md:justify-between lg:flex lg:flex-row lg:justify-between lg:items-cente lg:mx-5 ">
            <div className="text-center">
                <p className="text-ms ">&copy; 2024 Luxe Store. Power by FakeStore API</p>
            </div>
            <div className="text-ms flex gap-2 justify-around lg:gap-5">
                <p>terms of service</p>
                <p>privacy policy</p>
                <p>cookies</p>
            </div>
        </footer>
    );
}

export default Footer;

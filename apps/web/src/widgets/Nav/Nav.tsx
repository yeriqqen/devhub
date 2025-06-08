export const Nav = () => {
    return (
        <nav className="fixed left-0 right-0 top-1/2 transform -translate-y-1/2 pointer-events-none">
            <div className="flex justify-between items-center px-6 md:px-8">
                <div className="text-xl underline font-light pointer-events-auto cursor-pointer text-black">
                    explore web macOS mobile
                </div>
                <div className="text-xl font-light pointer-events-auto cursor-pointer text-black">
                    about contact portfolio resume connect
                </div>
            </div>
        </nav>
    );
};

export default Nav;
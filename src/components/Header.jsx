import React from 'react'
import NavBar from "./navBar/NavBar.jsx";

const Header = () => {
    return (
        <div className="w-full bg-transparent fixed top-0 left-0 z-50"> {/* Added a background to the header */}
            <NavBar />
        </div>
    );
};
export default Header

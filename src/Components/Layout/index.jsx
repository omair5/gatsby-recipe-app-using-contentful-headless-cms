import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import '../../Assets/GlobalStyles/global.css'

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    );
}

export default Layout;
import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Layout = ({ children }) => {
    return (
        <>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        </>
    );
};

export default Layout;

import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Layout = ({ children }) => {
    return (
        <div>
            <Navbar />
            <main className="min-h-screen">{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;

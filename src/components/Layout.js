import React from 'react';
import Header from './Header';

const Layout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">{children}</main>
            <footer className="bg-gray-800 text-white text-center py-4">
                <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Layout;
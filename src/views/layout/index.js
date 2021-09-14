import React from 'react';
import Header from "../../componets/Header";
import Footer from "../../componets/Footer";

const Layout = ({children}) => {
    return (
        <>
           <Header />
            <main className='main'>
                {children}
            </main>
           <Footer />
        </>
    );
};

export default Layout;
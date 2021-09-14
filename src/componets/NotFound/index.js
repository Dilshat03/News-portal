import React from 'react';
import {useLocation} from "react-router-dom";
import Layout from "../../views/layout";

const NotFound = () => {
    const location = useLocation()

    return (
<Layout>
    <div className={location.pathname === '/' && 'hidden'}>
        <div className='text-center my-20 text-3xl'>
            <img src="https://www.quasa.io/storage/photos/%D0%A4%D0%BE%D1%82%D0%BE%205/404%203.png" alt=""/>
        </div>
    </div>

</Layout>
    );
};

export default NotFound;
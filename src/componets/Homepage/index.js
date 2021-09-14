import React from 'react';
import {useHistory} from "react-router-dom";

const HomePage = () => {
    const history = useHistory()
    const handleCheck = () => {
        history.push('/news')
    }
    return (
        <div className='hero text-center'>
            <div className='my-52 hero-box'>
                <h1 className='hero-title text-3xl'>Добро пожаловать на сайт футбольных новостей</h1>
                <button onClick={handleCheck} className='btn'>Новости</button>
            </div>
        </div>
    );
};

export default HomePage;
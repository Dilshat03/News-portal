import React, {useEffect, useState} from 'react';
import Layout from "../../views/layout";
import axios from "axios";
import {Link, useParams} from "react-router-dom";
import Spinner from "../Spinner";
import NotFound from "../NotFound";

const NewsDetails = () => {
    const [oneNews, setOneNews] = useState({})
    const {id} = useParams()
    const [isLoading, setIsLoading] = useState(true)
    const [notFound, setNotFound] = useState(false)


    useEffect(() => {
        const FetchData = async () => {
            try {
                const {data} = await axios(`https://613b6401110e000017a455d2.mockapi.io/api/news/${id}`)
                setOneNews(data)
            } catch (e) {
                setNotFound(true)
            } finally {
                setIsLoading(false)
            }
        }
        FetchData()
    }, [id])
    if (isLoading) {
        return <Spinner/>
    }
    if (notFound) {
        return <NotFound/>
    }
    return (
        <Layout>
            <div className='container mx-auto my-16 '>
                <div className='text-center mb-10'>
                    <div className='flex justify-between '>
                        <div  className="block relative ">
                            <img alt="profil" src="https://source.unsplash.com/random"
                                 className="mx-auto object-cover rounded-full h-16 w-16 mr-4"/>
                            <span className='normal-case'>
                                Автор: {oneNews.author}
                            </span>
                        </div>
                        <p className='mr-2'>Дата публикации: {oneNews.data}</p>
                    </div>
                    <h2 className='text-4xl'>{oneNews.title}</h2>
                       <img src={oneNews.img} alt="" className='img-news-2 '/>
                       <p>{oneNews.desc}</p>
                </div>
                <div className="comment text-center">
                    <p className='text-3xl mt-4'>Коментарии: 2</p>
                    <div className='flex mt-2 justify-center'>
                        <Link to='#' className='mr-2 hover:text-red-500'>Новые</Link>
                        <Link to='#' className='mr-2 hover:text-red-500'>Старые</Link>
                        <Link to='#' className='mr-2 hover:text-red-500'>Популярные</Link>
                    </div>
                    <div>
                        <input type="text"
                               required
                               className='input-comment p-2 mt-4' placeholder='Напишите коментарий...'
                        />
                        <button className='btn-send'>
                            <i className='bx bxs-send send'></i>
                        </button>
                    </div>
                    <div>
                    </div>
                </div>
                <div  className="block relative mt-8">
                    <img alt="profil" src="https://st.championat.com/i/ava/man.svg"
                         className="mx-auto object-cover rounded-full h-16 w-16 mr-2"/>
                    <span className='text-xs mr-4'>Лейброн Джеймс
                    </span>
                    <span className='text-xs text-gray-500	'>15.09.2021 в 08:06</span>
                    <p className='mt-2'>Норм, не могу судить его как тренера, за Зенитом особо не слежу, но позиция в плане вне футбола радует...
                    </p>
                    <div className='mt-2'>
                        <Link className='mr-4 hover:text-pink-500' role='button' to='https://github.com/'>Ответить</Link>
                        <Link className='mr-4 hover:text-pink-500' role='button' to='https://github.com/'>Поделится</Link>
                        <Link className='mr-4 hover:text-pink-500' role='button' to='https://github.com/'>Пожаловаться</Link>
                    </div>
                </div>
                <div  className="block relative mt-8">
                    <img alt="profil" src="https://st.championat.com/i/ava/man.svg"
                         className="mx-auto object-cover rounded-full h-16 w-16 mr-2"/>
                    <span className='text-xs mr-4'>Лейброн Джеймс
                    </span>
                    <span className='text-xs text-gray-500	'>15.09.2021 в 08:06</span>
                    <p className='mt-2'>Норм, не могу судить его как тренера, за Зенитом особо не слежу, но позиция в плане вне футбола радует...
                    </p>
                    <div className='mt-2'>
                        <Link className='mr-4 hover:text-pink-500' role='button' to='https://github.com/'>Ответить</Link>
                        <Link className='mr-4 hover:text-pink-500' role='button' to='https://github.com/'>Поделится</Link>
                        <Link className='mr-4 hover:text-pink-500' role='button' to='https://github.com/'>Пожаловаться</Link>
                    </div>
                </div>

            </div>

        </Layout>
    );
};

export default NewsDetails;
import React, {useEffect, useState} from 'react';
import Layout from "../../views/layout";
import axios from 'axios'
import {Link} from "react-router-dom";
import Spinner from "../Spinner";
import NotFound from "../NotFound";

const News = () => {
    const [news, setNews] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [notFound, setNotFound] = useState(false)

    useEffect(() => {
        const FetchData = async () => {
            try {
                const {data} = await axios('https://613b6401110e000017a455d2.mockapi.io/api/news')
                setNews(data)
            } catch (e) {
                setNotFound(true)
            } finally {
                setIsLoading(false)
            }
        }
        FetchData()
    }, [])
    if (isLoading) {
        return <Spinner/>
    }
    if (notFound) {
        return <NotFound/>
    }
    return (
            <Layout>
                <div className='container mx-auto my-20 justify-center  items-center'>
                    <div className='grid grid-cols-3'>
                        {
                            news.map(el =>
                                <div className='text-center'>
                                    <Link key={el.id} to={`/news/${el.id}`}>
                                        <img src={el.img} alt="" className='object-cover img-news'/>
                                        <p>{el.title}</p>
                                    </Link>
                                </div>
                            )
                        }
                    </div>
                </div>
            </Layout>
    );
};

export default News;
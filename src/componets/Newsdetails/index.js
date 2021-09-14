import React, {useEffect, useState} from 'react';
import Layout from "../../views/layout";
import axios from "axios";
import {useParams} from "react-router-dom";
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
    if (notFound){
        return <NotFound />
    }
    return (
<Layout>
    <div className='container mx-auto my-16 '>
        <div className='text-center'>
            <div className='flex'>
                <p className='mr-2'>{oneNews.data}</p>
                <p>{oneNews.author}</p>
            </div>
            <h2 className='text-4xl'>{oneNews.title}</h2>
            <img src={oneNews.img} alt="" className='img-news-2'/>
            <p>{oneNews.desc}</p>
        </div>
    </div>

</Layout>
    );
};

export default NewsDetails;
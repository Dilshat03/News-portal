import React, {useEffect, useState} from 'react';
import Layout from "../../views/layout";
import axios from 'axios'
import {Link} from "react-router-dom";
import Spinner from "../Spinner";

const News = () => {
    const [news,setNews]= useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=>{
        axios ('https://613b6401110e000017a455d2.mockapi.io/api/news')
            .then(({data})=>{
                setIsLoading(false)
                setNews(data)
            })
    },[])
    if (isLoading) {
        return <Spinner />
    }
    return (
        <Layout>
            <div className='container mx-auto my-20 justify-center  items-center'>
                <div className='grid grid-cols-3'>
                    {
                        news.map(el=>
                            <div className='text-center'>
                                <Link key={el.id} to={`/newsDT/${el.id}`}>
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
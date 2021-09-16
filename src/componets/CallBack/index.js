import React, {useEffect, useState} from 'react';
import axios from "axios";
import Layout from "../../views/layout";

const CallBAck = () => {
    const [calback,setCallBack] = useState([])
    useEffect(()=>{
        axios('https://613b6401110e000017a455d2.mockapi.io/api/callback')
            .then(({data})=>setCallBack(data))
    },[])
    return (
        <Layout>
            {/*<div className="container mx-auto mt-12">*/}
            {/*    <div className='flex justify-around text-center'>*/}
            {/*        <p>id</p>*/}
            {/*        <p>Name</p>*/}
            {/*        <p>Phone</p>*/}
            {/*        <p>Email</p>*/}
            {/*    </div>*/}
            {/*    {*/}
            {/*        calback.map(el=>*/}
            {/*        <div className='flex justify-around w-full call-list'>*/}
            {/*            <p>{el.id}</p>*/}
            {/*            <p>{el.name}</p>*/}
            {/*            <p>{el.phone}</p>*/}
            {/*            <p>{el.email}</p>*/}
            {/*        </div>*/}
            {/*        )*/}


            {/*    }*/}
            {/*</div>*/}

            <table className="table p-4 bg-white shadow rounded-lg mx-auto mt-16 mb-20">
                <thead>
                <tr>
                    <th className="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                        id
                    </th>
                    <th className="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                        Name
                    </th>
                    <th className="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                        Phone
                    </th>
                    <th className="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                        Email
                    </th>
                </tr>
                </thead>
                <tbody>
                    {
                        calback.map(el=>
                            <tr className="text-gray-700">
                               <td className="border-b-2 p-4 dark:border-dark-5">
                                   {el.id}
                               </td>
                               <td className="border-b-2 p-4 dark:border-dark-5">
                                   {el.name}
                               </td>
                               <td className="border-b-2 p-4 dark:border-dark-5">
                                   {el.phone}
                               </td>
                               <td className="border-b-2 p-4 dark:border-dark-5">
                                   {el.email}
                               </td>
                            </tr>
                        )
                    }

                </tbody>
            </table>

        </Layout>
    );
};

export default CallBAck;
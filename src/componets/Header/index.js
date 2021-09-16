import React, {useState} from 'react';
import {Link, NavLink} from "react-router-dom";
import axios from "axios";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)

    const [user,setUser] = useState({name:'',phone:'',email:''})

    const [status,setStatus] = useState(false)
    const handleSubmit = (e) => {
      e.preventDefault()
    axios.post('https://613b6401110e000017a455d2.mockapi.io/api/callback',user)
        .then(()=> {
            setStatus(true)
            setTimeout(()=>{
                setIsOpen(false)
                setStatus(false)
            },2000)
        })
    }
    const handleChange = (e) => {
      setUser({...user,[e.target.name]:e.target.value})
    }
    return (
        <div>
            <nav className="flex bg-green-700 flex-wrap items-center justify-between p-3 ">
                <div className="lg:order-2 w-auto lg:w-1/5 lg:text-center">
                    <Link className="text-xl text-yellow-200 font-semibold font-heading" to='/'>
                        DilshNews
                    </Link>
                </div>

                <div className="navbar-menu hidden lg:order-3 lg:block w-full lg:w-2/4 lg:text-right">
                    <NavLink exact className="block lg:inline-block  lg:mt-0 mr-10 text-yellow-200 " to='/'>
                        Главная
                    </NavLink>
                    <NavLink className="block lg:inline-block  lg:mt-0 mr-10 text-yellow-200" to='/news'>
                        Новости
                    </NavLink>
                    <NavLink className="block lg:inline-block  lg:mt-0 mr-10 text-yellow-200" to='/signIn'>
                        Войти
                    </NavLink>
                    <NavLink className="block lg:inline-block  lg:mt-0 text-yellow-200" to='/signUp'>
                        Регистрация
                    </NavLink>
                    <button className="callback" onClick={() => setIsOpen(true)}>
                        Связаться со мной
                    </button>
                </div>
            </nav>
            {
                isOpen && <div className="modal-window">
                    <div className="modal-content">
                        {
                            status ? 'Успешно отправлено' :
                                <>
                                    <h2 className='text-center mb-2'>Форма</h2>
                                    <form onSubmit={handleSubmit}>
                                        <div
                                            className="bg-white rounded-lg shadow sm:max-w-md sm:w-full sm:mx-auto sm:overflow-hidden">
                                            <div className="px-4 py-8 sm:px-10">
                                                <div className="relative mt-6">
                                                    <div className="absolute inset-0 flex items-center">
                                                        <div className="w-full border-t border-gray-300">
                                                        </div>
                                                    </div>
                                                    <div className="relative flex justify-center text-sm leading-5">
                                         <span className="px-2 text-gray-500 bg-white">
                                                             Заполните форму
                                         </span>
                                                    </div>
                                                </div>
                                                <div className="mt-6">
                                                    <div className="w-full space-y-6">
                                                        <div className="w-full">
                                                            <div className=" relative ">
                                                                <label htmlFor="search-form-price" className='text-gray-700 bg-white '> Введите имя:</label>
                                                                <input type="text" id="search-form-price"
                                                                       className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                                                       placeholder="Ваше имя:" required name='name'
                                                                       onChange={handleChange}
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="w-full">
                                                            <div className=" relative ">
                                                                <label htmlFor="search-form-location" className='text-gray-700'> Введите телефон:</label>
                                                                <input type="text" id="search-form-location"
                                                                       className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                                                       placeholder="Ваш телефон:" required name='phone'
                                                                       onChange={handleChange}
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="w-full">
                                                            <div className=" relative ">
                                                                <label htmlFor="search-form-name" className='text-gray-700'> Введите почту:</label>
                                                                <input type="email" id="search-form-name"
                                                                       className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                                                       placeholder="Ваша почта:" required name='email'
                                                                       onChange={handleChange}
                                                                />
                                                            </div>
                                                        </div>
                                                        <div>
                                <span className="block w-full rounded-md shadow-sm">
                                    <button type="submit"
                                            className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                        Отправить
                                    </button>
                                </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="px-4 py-6 border-t-2 border-gray-200 bg-gray-50 sm:px-10">
                                                <p className="text-xs leading-5 text-gray-500">
                                                    Данную форму вы можете заполнить только один раз
                                                </p>
                                            </div>
                                        </div>

                                    </form>
                                </>
                        }
                        <button className="close-modal"
                                onClick={()=>setIsOpen(false)}
                        >×</button>
                    </div>
                </div>
            }
        </div>
    );
};

export default Header;
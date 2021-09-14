import React from 'react';
import {Link,NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div>
            <nav className="flex bg-green-700 flex-wrap items-center justify-between p-3 ">
                <div className="lg:order-2 w-auto lg:w-1/5 lg:text-center">
                    <Link className="text-xl text-yellow-200 font-semibold font-heading" to='/'>
                        DilshNews
                    </Link>
                </div>
                <div className="block lg:hidden">
                    <button
                        className="navbar-burger flex items-center py-2 px-3 text-indigo-500 rounded border border-indigo-500">
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <title>
                                Menu
                            </title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z">
                            </path>
                        </svg>
                    </button>
                </div>
                <div className="navbar-menu hidden lg:order-3 lg:block w-full lg:w-2/5 lg:text-right">
                    <NavLink exact className="block lg:inline-block mt-4 lg:mt-0 mr-10 text-yellow-200 " to='/'>
                        Главная
                    </NavLink>
                    <NavLink className="block lg:inline-block mt-4 lg:mt-0 mr-10 text-yellow-200" to='/news'>
                        Новости
                    </NavLink>
                    <NavLink className="block lg:inline-block mt-4 lg:mt-0 mr-10 text-yellow-200" to='/signIn'>
                        Войти
                    </NavLink>
                    <NavLink className="block lg:inline-block mt-4 lg:mt-0 text-yellow-200" to='/signUp'>
                        Регистрация
                    </NavLink>
                </div>
            </nav>
        </div>
    );
};

export default Header;
import React from 'react';
/* import { handler } from 'tailwindcss-animated'; */

function AuthButtons({ isTokenExist, toggleModal, setAuthModalType, handleLogout }) {

    return (

        <>
            {/* Check if the user is logged in or not (token exists) */}
            {!isTokenExist ? (
                // If the user is not logged in, show login and signup buttons
                <>
                    <button
                        onClick={() => {
                            toggleModal()
                            setAuthModalType('login')
                        }}
                        type="button"
                        className="border-[1px] border-slate-800 inline-flex items-center rounded-md px-3 py-2 font-medium text-green-700 shadow-sm hover:bg-indigo-500  hover:text-yellow-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 animate-fade-down animate-delay-300 animate-once">
                        Login
                    </button>
                    <button
                        onClick={() => {
                            toggleModal()
                            setAuthModalType('signup')
                        }}
                        type="button"
                        className="border-[1px] border-slate-800 inline-flex items-center rounded-md px-3 py-2 font-medium text-green-700 shadow-sm hover:bg-indigo-500  hover:text-yellow-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 animate-fade-down animate-delay-300 animate-once">
                        Signup
                    </button>
                </>) : (
                // If the user is logged in, show the logout button
                <button
                    onClick={() => {
                        handleLogout()
                    }}
                    type="button"
                    className="animate-fade-down animate-delay-300 animate-once border-[1px] border-slate-800 inline-flex items-center rounded-md px-3 py-2 font-medium text-green-700 shadow-sm hover:bg-indigo-500  hover:text-yellow-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    Logout
                </button>)}
        </>




    );
};

export default AuthButtons;

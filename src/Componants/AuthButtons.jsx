import React from 'react';

export default function AuthButtons({ isTokenExist, toggleModal, setAuthModalType, handleLogout }) {
    // Function to render auth buttons based on the user's token status
    function ControlrenderAuthBtns() {
        if (isTokenExist) {
            // Render Logout button if the user is authenticated
            return (
                <button
                    onClick={() => {
                        handleLogout()
                    }}
                    type="button"
                    className="border-[1px] border-slate-800 inline-flex items-center rounded-md px-3 py-2 font-medium text-green-700 shadow-sm hover:bg-indigo-500  hover:text-yellow-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    Logout
                </button>)
        }
        else {
            // Render Login and Signup buttons if the user is not authenticated
            return (
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
                </>)
        }
    }
    // Render the appropriate authentication buttons
    return (
        <>
            {ControlrenderAuthBtns()}
        </>
    )

};


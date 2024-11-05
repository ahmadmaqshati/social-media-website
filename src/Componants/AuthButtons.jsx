import React from 'react';

export default function AuthButtons({ isTokenExist, toggleModal, setAuthModalType, handleLogout, userData }) {
    // Function to render auth buttons based on the user's token status
    function ControlrenderAuthBtns() {
        if (isTokenExist) {
            // Render Logout button if the user is authenticated
            return (
                <div className='flex items-center gap-2'>
                    <img src={userData.profile_image} alt=""

                        className="profile-img w-[35px] h-[35px] rounded-full inline"
                    />
                    <span className='font-semibold tracking-tight text-sm'>
                        {userData.username}
                    </span>

                    <button
                        onClick={() => {
                            handleLogout()
                        }}
                        type="button"
                        className="border-[1px] border-red-600 inline-flex items-center rounded-md px-3 py-2 font-medium text-red-600 shadow-sm hover:bg-indigo-500  hover:text-yellow-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        Logout
                    </button>
                </div>)
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


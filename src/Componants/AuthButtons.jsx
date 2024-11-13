import React from 'react';
import { useContext } from 'react';
import { AuthBtnsContext } from '../contexts/AuthBtnsContext';

export default function AuthButtons() {

    // Use context and destructure necessary values and functions from AuthBtnsContext 
    const {
        toggleModal,
        setAuthType,
        isTokenExist,
        userData,
        handleLogout
    } = useContext(AuthBtnsContext);

    // Function to render auth buttons based on the user's token status
    function ControlrenderAuthBtns() {
        if (isTokenExist) {
            // If the user is logged in (the user is authenticated) =>
            // Render Logout button 
            return (
                <div className='flex items-center gap-2'>
                    {/* user's profile image */}
                    <img src={userData.profile_image} alt=""
                        className="profile-img w-[35px] h-[35px] rounded-full inline"
                    />

                    {/* user's username */}
                    <span className='font-semibold tracking-tight text-sm'>
                        {userData.username}
                    </span>

                    {/* Logout button */}
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
            // If the user is not logged in (the user is not authenticated) =>
            // Render Login and Signup buttons
            return (
                <>
                    {/* Login button */}
                    <button
                        onClick={() => {
                            setAuthType('login')
                            toggleModal()

                        }}
                        type="button"
                        className="border-[1px] border-slate-800 inline-flex items-center rounded-md px-3 py-2 font-medium text-green-700 shadow-sm hover:bg-indigo-500  hover:text-yellow-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 animate-fade-down animate-delay-300 animate-once">
                        Login
                    </button>

                    {/* Signup button */}
                    <button
                        onClick={() => {
                            setAuthType('signup')
                            toggleModal()
                        }}
                        type="button"
                        className="border-[1px] border-slate-800 inline-flex items-center rounded-md px-3 py-2 font-medium text-green-700 shadow-sm hover:bg-indigo-500  hover:text-yellow-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 animate-fade-down animate-delay-300 animate-once">
                        Signup
                    </button>
                </>)
        }
    }

    return (
        <>
            {/* Render the appropriate buttons */}
            {ControlrenderAuthBtns()}
        </>
    )

};


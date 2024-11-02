import React, { useState } from 'react';
import axios from 'axios';
// Import toast for displaying notifications
import { toast } from 'react-toastify';

export default function AuthModal({ baseUrl, toggleModal, isAuthModalOpen, authModalType, setTokenExist, notifyLoginSuccess }) {
    const [loginInputs, setLoginInputs] = useState({
        usernameInput: 'ahamdyarob',
        passwordInput: '123456'
    })
    const InputField = ({ label, type }) => (
        <div className="mb-4">
            <label className="tracking-wide block text-gray-700 mb-2">{label}</label>
            <input type={type} className="border border-gray-300 rounded py-2 px-3 w-full" />
        </div>
    );

    async function handleLoginSubmit(event) {
        event.preventDefault();
        const params = {
            "username": loginInputs.usernameInput,
            "password": loginInputs.passwordInput
        };

        try {
            const res = await axios.post(`${baseUrl}login`, params); // Send login request
            const token = res.data.token;
            localStorage.setItem("token", token);
            // Update token state to indicate user is logged in
            setTokenExist(true);
            notifyLoginSuccess(); // Notify login success
            toggleModal(); // Close the authentication modal
        } catch (error) {
            console.error("Login failed:", error.response.data.message);
            // Display a success message on the screen after login
            toast.error(`Login failed:${error.response.data.message} Please try again.`, { position: 'top-right', autoClose: 2000 });
        }
    }

    return (
        <>
            {isAuthModalOpen && (
                <div className="animate-fade-down animate-delay-150 animate-once fixed inset-0 flex items-center justify-center z-50">
                    <div onClick={toggleModal} className="absolute inset-0 bg-black opacity-50"></div>
                    <div className="mx-3 bg-white rounded-lg p-8 z-50 w-96 bg-gradient-to-br from-teal-400 to-gray-700">
                        <h2 className="tracking-normal text-shadow text-shadow-custom text-2xl font-bold mb-4">
                            {authModalType == 'login' ? "Login" : "Signup"}
                        </h2>
                        {/* Form */}
                        <form onSubmit={handleLoginSubmit}>

                            {authModalType !== 'login' && (
                                <>
                                    <InputField label="File :" type="file" />
                                    <InputField label="Name :" type="email" />
                                </>
                            )}
                            {/* Login Inputs */}
                            <div className="mb-4">
                                <label className="tracking-wide block text-gray-700 mb-2">UserName :</label>
                                <input
                                    value={loginInputs.usernameInput}
                                    onChange={(e) => {
                                        setLoginInputs({ ...loginInputs, usernameInput: e.target.value })
                                    }}
                                    type="text"
                                    className="border border-gray-300 rounded py-2 px-3 w-full"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="tracking-wide block text-gray-700 mb-2">Password :</label>
                                <input
                                    value={loginInputs.passwordInput}
                                    onChange={(e) => {
                                        setLoginInputs({ ...loginInputs, passwordInput: e.target.value })
                                    }}
                                    type="password"
                                    className="border border-gray-300 rounded py-2 px-3 w-full"
                                />
                            </div>
                            {/*==Login Inputs==*/}

                            {/* Modal-Btns */}
                            <button
                                type="submit"
                                className="tracking-widest bg-blue-500 text-white px-4 py-2 rounded transition duration-300 transform hover:bg-blue-600 hover:scale-105">
                                {authModalType == 'login' ? 'Login' : 'Signup'}
                            </button>

                        </form>
                        <button
                            onClick={toggleModal}
                            className="tracking-widest text-red-800 underline transition duration-300 hover:text-blue-700 mt-4"
                        >
                            Close
                        </button>
                        {/* ==Modal-Btns== */}
                    </div>
                </div>
            )}
        </>
    );
}

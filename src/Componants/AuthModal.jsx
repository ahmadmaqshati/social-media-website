import React, { useState } from 'react';

export default function AuthModal({ toggleModal, isModalOpen, modalType }) {

    return (
        <>
            {isModalOpen && (
                <div className="animate-fade-down animate-delay-150 animate-once fixed inset-0 flex items-center justify-center z-50">
                    <div onClick={toggleModal} className="absolute inset-0 bg-black opacity-50"></div>
                    <div className="mx-3 bg-white rounded-lg p-8 z-50 w-96 bg-gradient-to-br from-teal-400 to-gray-700">
                        <h2 className="tracking-normal text-shadow text-shadow-custom text-2xl font-bold mb-4">
                            {modalType == 'login' ? "Login" : "Signup"}
                        </h2>
                        <form>
                            {modalType != 'login' && (
                                <div className="mb-4">
                                    <label className="tracking-wide block text-gray-700 mb-2">File :</label>
                                    <input
                                        type="file"
                                        className="border border-gray-300 rounded py-2 px-3 w-full"
                                    />
                                </div>
                            )
                            }



                            {modalType != 'login' && (
                                <div className="mb-4">
                                    <label className="tracking-wide block text-gray-700 mb-2">Name :</label>
                                    <input
                                        type="email"
                                        className="border border-gray-300 rounded py-2 px-3 w-full"
                                    />
                                </div>
                            )
                            }
                            <div className="mb-4">
                                <label className="tracking-wide block text-gray-700 mb-2">UserName :</label>
                                <input
                                    type="email"
                                    className="border border-gray-300 rounded py-2 px-3 w-full"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="tracking-wide block text-gray-700 mb-2">Password :</label>
                                <input
                                    type="password"
                                    className="border border-gray-300 rounded py-2 px-3 w-full"
                                />
                            </div>
                            {/* Modal-Btns */}
                            <button
                                onClick={toggleModal}
                                className="tracking-widest bg-blue-500 text-white px-4 py-2 rounded transition duration-300 transform hover:bg-blue-600 hover:scale-105">
                                Login
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
/* background: linear-gradient(to bottom right, #4ECDC4, #556270); */
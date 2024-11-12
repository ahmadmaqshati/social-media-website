import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import LoginModal from './LoginModal';
import SignupModal from './SignupModal';
export default function AuthModal({ baseUrl, toggleModal, isAuthModalOpen, clickedButton, setTokenExist, notifyLoginSuccess, setUserData, userData }) {
    return (
        <>
            {isAuthModalOpen && (clickedButton === 'login' ?
                (<LoginModal toggleModal={toggleModal}
                    setTokenExist={setTokenExist} setUserData={setUserData}
                    notifyLoginSuccess={notifyLoginSuccess} />)
                : (<SignupModal toggleModal={toggleModal} />)
            )}
        </>
    );
}

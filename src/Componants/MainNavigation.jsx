import { useEffect, useState } from 'react';
//Libraries
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthBtnsContext } from '../contexts/AuthBtnsContext';
import AppBar from './AppBar';

export default function MainNavigation() {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('Tarmeez');
    const [isAuthModalOpen, setAuthModalOpen] = useState(false);
    const [isTokenExist, setIsTokenExist] = useState(false);
    const [userData, setUserData] = useState({
        username: '',
        profile_image: ''
    });
    const [authType, setAuthType] = useState('login');

    useEffect(() => {
        //Check for token existence in localStorage when the component mounts.
        const token = localStorage.getItem('token');
        setIsTokenExist(Boolean(token))

        // If token exists, check if userData is also stored
        const storedUserData = JSON.parse(localStorage.getItem('userData'));
        if (storedUserData) {
            setUserData(storedUserData);
        }
    }, []);

    const toggleMobileMenu = () => { setMobileMenuOpen(!isMobileMenuOpen); };

    const toggleModal = () => {
        setAuthModalOpen(!isAuthModalOpen);

    };

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("userData");

        // Update the token state to indicate the user is no longer logged in
        setIsTokenExist(false);

        // Display a success message on the screen after logout
        toast.success('Login Successfully', {
            position: 'top-center',
            autoClose: 1000,
        });
    };

    return (
        <>
            <AuthBtnsContext.Provider value={{
                activeLink,
                setActiveLink,
                toggleMobileMenu,
                isMobileMenuOpen,
                authType,
                setAuthType,
                toggleModal,
                isTokenExist,
                setIsTokenExist,
                handleLogout,
                userData,
                setUserData,
                isAuthModalOpen,
                notifyLoginSuccess: () => toast.success('Login Successfully',
                    { position: 'top-center', autoClose: 1000, })
            }}>

                <AppBar />

            </AuthBtnsContext.Provider>

            {/* Toast container for displaying notifications */}
            <ToastContainer />
        </>

    );
}


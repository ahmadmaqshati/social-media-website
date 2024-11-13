import { useEffect, useState } from 'react';
import MobileNav from './MobileNav';
import AuthModal from './AuthModal';
import AuthButtons from './AuthButtons';
//Libraries
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavigationLinks from './NavigationLinks';
import { AuthBtnsContext } from '../contexts/AuthBtnsContext';

export default function TopNavigation() {
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
            <header className="sticky inset-x-0 top-0 z-50 mx-6">
                <div style={{ background: "#F9F7FB" }} className="container mx-auto max-w-5xl">
                    {/* Navigation bar with shadow effect */}
                    <nav className="shadow-md nav flex items-center justify-between p-6 lg:px-8" aria-label="Global">
                        {/* Left section for navigation links */}
                        <div className="flex lg:flex-1">
                            <div className="flex space-x-4">
                                <NavigationLinks
                                    activeLink={activeLink}
                                    setActiveLink={setActiveLink}
                                />
                            </div>
                        </div>

                        {/* Mobile menu button (visible on small screens) */}
                        <div className="flex lg:hidden">
                            <button
                                onClick={toggleMobileMenu} // Toggle mobile menu visibility
                                type="button"
                                className="w-10 p-2 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition ease-in-out duration-150"
                            >
                                <span className="sr-only">Another Action</span>
                                <img src="https://www.svgrepo.com/show/415613/menu-basic-other.svg" alt="Menu icon" />
                            </button>
                        </div>

                        <AuthBtnsContext.Provider value={{
                            toggleMobileMenu: toggleMobileMenu,
                            authType: authType,
                            setAuthType: setAuthType,
                            toggleModal: toggleModal,
                            isTokenExist: isTokenExist,
                            setIsTokenExist: setIsTokenExist,
                            handleLogout: handleLogout,
                            userData: userData,
                            setUserData: setUserData,
                            isAuthModalOpen: isAuthModalOpen,

                            notifyLoginSuccess: () => toast.success('Login Successfully',
                                { position: 'top-center', autoClose: 1000, }),
                        }}>

                            {/* Auth buttons (visible on large screens) */}
                            <div className="hidden lg:flex sm:ml-3 gap-2">
                                <AuthButtons />
                            </div>


                            {/* Mobile navigation menu (appears when mobile menu is open) */}
                            {isMobileMenuOpen && (
                                <MobileNav />
                            )}

                            {/* Authentication modal */}
                            <AuthModal />


                        </AuthBtnsContext.Provider>

                    </nav>
                </div>

            </header>

            {/* Toast container for displaying notifications */}
            <ToastContainer />
        </>

    );
}


import { useEffect, useState } from 'react';
import MobileNav from './MobileNav';
import AuthModal from './AuthModal';
import AuthButtons from './AuthButtons';
//Libraries
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';


export default function TopNavigation({ baseUrl }) {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const navigationLinks = [
        { name: 'Tarmeez', path: '/' },
        { name: 'Home', path: '/home' },
        { name: 'Profile', path: '/profile' }
    ];
    const [activeLink, setActiveLink] = useState('Tarmeez');
    const [isAuthModalOpen, setAuthModalOpen] = useState(false);
    const [authModalType, setAuthModalType] = useState('login')
    const [isTokenExist, setTokenExist] = useState(false);

    const toggleMobileMenu = () => { setMobileMenuOpen(!isMobileMenuOpen); };

    const toggleModal = () => {
        setAuthModalOpen(!isAuthModalOpen);
    };

    useEffect(() => {
        //Check for token existence in localStorage when the component mounts.
        const token = localStorage.getItem('token');
        setTokenExist(!!token)
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("token");
        // Update the token state to indicate the user is no longer logged in
        setTokenExist(false);
        // Display a success message on the screen after logout
        toast.success('Login Successfully', {
            position: 'top-center',
            autoClose: 1000,
        });

    };

    const navigationLinksToBeRender = navigationLinks.map((link, index) => (
        <Link
            key={index}
            to={link.path}
            onClick={() => setActiveLink(link.name)}
            className={`font-semibold ${activeLink === link.name ? 'text-blue-600' : 'text-gray-600'}`}>
            {link.name}
        </Link>
    ))

    return (
        <>
            <header className="sticky inset-x-0 top-0 z-50 mx-3">
                <div style={{ background: "#F9F7FB" }} className="container mx-auto max-w-5xl">
                    <nav className="shadow-md nav flex items-center justify-between p-6 lg:px-8" aria-label="Global">
                        <div className="flex lg:flex-1">
                            <div className="flex space-x-4">
                                {navigationLinksToBeRender}
                            </div>
                        </div>

                        {/*Menue Btn :This button will be hidden
                        on large screens and above */}
                        <div className="flex lg:hidden">
                            <button
                                onClick={toggleMobileMenu}
                                type="button"
                                className="w-10 p-2 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition ease-in-out duration-150"
                            >
                                <span className="sr-only">Another Action</span>
                                <img src="https://www.svgrepo.com/show/415613/menu-basic-other.svg" alt="" />
                            </button>
                        </div>
                        {/* ====================Menue Btn================== */}

                        {/* Hide auth buttons on small screens */}
                        <div className="hidden lg:flex sm:ml-3 gap-2">
                            <AuthButtons
                                toggleModal={toggleModal}
                                setAuthModalType={setAuthModalType}
                                isTokenExist={isTokenExist}
                                handleLogout={handleLogout}
                            />
                        </div>
                        {/* ==Hide auth buttons on small screens== */}

                    </nav>
                </div>
                {isMobileMenuOpen && (
                    <MobileNav
                        toggleMobileMenu={toggleMobileMenu}
                        navigationLinksToBeRender={navigationLinksToBeRender}
                        toggleModal={toggleModal}
                        setAuthModalType={setAuthModalType}
                        isTokenExist={isTokenExist}
                        handleLogout={handleLogout}
                    />
                )}
            </header>
            <AuthModal baseUrl={baseUrl}
                toggleModal={toggleModal}
                isAuthModalOpen={isAuthModalOpen}
                authModalType={authModalType}
                setAuthModalType={setAuthModalType}
                setTokenExist={setTokenExist}
                notifyLoginSuccess={() => toast.success('Login Successfully', {
                    position: 'top-center',
                    autoClose: 1000,
                })}
            />
            <ToastContainer />

        </>
    );
}








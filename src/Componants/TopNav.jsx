import { useEffect, useState } from 'react';
import MobileNav from './MobileNav';
import AuthModal from './AuthModal';
import AuthButtons from './AuthButtons';
//Libraries
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavigationLinks from './NavigationLinks';


export default function TopNavigation({ baseUrl }) {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('Tarmeez');
    const [isAuthModalOpen, setAuthModalOpen] = useState(false);
    const [authModalType, setAuthModalType] = useState('login')
    const [isTokenExist, setTokenExist] = useState(false);
    const [userData, setUserData] = useState({
        username: '',
        profile_image: ''
    });

    const toggleMobileMenu = () => { setMobileMenuOpen(!isMobileMenuOpen); };

    const toggleModal = () => {
        setAuthModalOpen(!isAuthModalOpen);

    };

    useEffect(() => {
        //Check for token existence in localStorage when the component mounts.
        const token = localStorage.getItem('token');
        setTokenExist(!!token)

        // If token exists, check if userData is also stored
        const storedUserData = JSON.parse(localStorage.getItem('userData'));
        if (storedUserData) {
            setUserData(storedUserData);
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("userData");

        // Update the token state to indicate the user is no longer logged in
        setTokenExist(false);

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
                    <nav className="shadow-md nav flex items-center justify-between p-6 lg:px-8" aria-label="Global">
                        <div className="flex lg:flex-1">
                            <div className="flex space-x-4">
                                <NavigationLinks
                                    activeLink={activeLink}
                                    setActiveLink={setActiveLink}
                                />
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
                                userData={userData}
                                setUserData={setUserData}
                            />
                        </div>
                        {/* ==Hide auth buttons on small screens== */}

                    </nav>
                </div>
                {isMobileMenuOpen && (
                    <MobileNav
                        toggleMobileMenu={toggleMobileMenu}
                        toggleModal={toggleModal}
                        setAuthModalType={setAuthModalType}
                        isTokenExist={isTokenExist}
                        handleLogout={handleLogout}
                        userData={userData}
                    />
                )}
            </header>
            <AuthModal baseUrl={baseUrl}
                toggleModal={toggleModal}
                isAuthModalOpen={isAuthModalOpen}
                authModalType={authModalType}
                setAuthModalType={setAuthModalType}
                setTokenExist={setTokenExist}
                userData={userData}
                setUserData={setUserData}
                notifyLoginSuccess={() => toast.success('Login Successfully', {
                    position: 'top-center',
                    autoClose: 1000,
                })}
            />
            <ToastContainer />

        </>
    );
}


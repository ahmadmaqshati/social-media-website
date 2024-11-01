import { useEffect, useState } from 'react';
import MobileNav from './MobileNav';
import AuthModal from './AuthModal';
import AuthButtons from './AuthButtons';

export default function TopNavigation() {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const navigationLinks = ['Tarmeez', 'Home', 'Profile']
    const [activeLink, setActiveLink] = useState('Tarmeez');
    const [isAuthModalOpen, setAuthModalOpen] = useState(false);
    const [authModalType, setAuthModalType] = useState('login')
    const [isTokenExist, setTokenExist] = useState(false);

    const toggleMobileMenu = () => { setMobileMenuOpen(!isMobileMenuOpen); };

    const toggleModal = () => {
        setAuthModalOpen(!isAuthModalOpen);
    };

    useEffect(() => {
        // تحقق من وجود التوكن عند تحميل المكون
        setTokenExist(true);
    }, []);


    const handleLogout = () => {
        localStorage.removeItem("token");
        setTokenExist(false);
    };

    const navigationLinksToBeRender = navigationLinks.map((link, index) => (
        <a key={index} href="#"
            onClick={() => setActiveLink(link)}
            className={`font-semibold ${activeLink === link ? 'text-blue-600' : 'text-gray-600'}`}>
            {link}
        </a>
    ))

    return (
        <>
            <header className="relative inset-x-0 top-0 z-50 mx-3">
                <div style={{ background: "#F9F7FB" }} className="container mx-auto max-w-5xl">
                    <nav className="nav flex items-center justify-between p-6 lg:px-8" aria-label="Global">
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
                        {/* ==Menue Btn== */}

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
            <AuthModal toggleModal={toggleModal}
                isAuthModalOpen={isAuthModalOpen}
                authModalType={authModalType}
                setAuthModalType={setAuthModalType}
                setTokenExist={setTokenExist}
            />
        </>
    );
}








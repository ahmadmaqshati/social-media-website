import AuthButtons from './AuthButtons';
import NavigationLinks from './NavigationLinks';
import { AuthBtnsContext } from '../contexts/AuthBtnsContext';
import { useState, useContext } from 'react';
export default function MobileNav() {
    const [isCloseBtnAnimating, setIsCloseBtnAnimating] = useState(false);

    const handleCloseMenu = () => {
        setIsCloseBtnAnimating(true);
        setTimeout(() => {
            setIsCloseBtnAnimating(false);
            toggleMobileMenu()
        }, 200);// This duration should match the animation duration 
    };

    // Use context and destructure necessary values and functions from AuthBtnsContext 
    const {
        toggleMobileMenu,
        toggleModal,
        setAuthType,
        isTokenExist,
        userData,
        setUserData,
        handleLogout
    } = useContext(AuthBtnsContext);
    return (
        <div className="lg:hidden" role="dialog" aria-modal="true">
            {/* Overlay for the mobile menu, darkens the background */}
            <div className="fixed inset-0 z-50 bg-black opacity-40" onClick={toggleMobileMenu}></div>

            {/* Mobile menu container */}
            <div className="fixed inset-y-0 h-72 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-full sm:ring-1 sm:ring-gray-900/10 ">
                {/* Close button for the mobile menu */}
                <div className="flex items-center justify-end">
                    <button
                        className={`text-center ${isCloseBtnAnimating ? 'animate-spin animate-once animate-duration-[200ms] animate-ease-linear' : ''}`}
                        type="button"
                        onClick={handleCloseMenu} // Closes the mobile menu
                    >
                        <span className="sr-only">Close menu</span>
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                            {/* Close icon (X) */}
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Main content of the mobile menu */}
                <div className="mt-6 flow-root">
                    <div className="-my-6 divide-y divide-gray-500/10">
                        {/* Navigation links section */}
                        <div className="py-6 flex gap-4 flex-col items-end">
                            <NavigationLinks />
                        </div>
                        <div className="py-6">
                            {/* Auth Btns on Mobile */}
                            <div className="flex gap-2 sm:flex justify-end">
                                <AuthButtons
                                    setAuthType={setAuthType}
                                    toggleModal={toggleModal}
                                    isTokenExist={isTokenExist}
                                    handleLogout={handleLogout}
                                    userData={userData}
                                    setUserData={setUserData}
                                />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

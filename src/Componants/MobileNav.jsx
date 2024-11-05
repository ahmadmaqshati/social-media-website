import { useState } from 'react';
import AuthButtons from './AuthButtons';

export default function MobileNav({ toggleMobileMenu, navigationLinksToBeRender, isTokenExist, handleLogout, toggleModal, setAuthModalType, userData }) {
    const [isCloseBtnAnimating, setIsCloseBtnAnimating] = useState(false);

    const handleCloseMenu = () => {
        setIsCloseBtnAnimating(true);
        setTimeout(() => {
            setIsCloseBtnAnimating(false);
            toggleMobileMenu();
        }, 200); // يجب أن يتطابق هذا مع مدة الدوران
    };

    return (
        <div className="lg:hidden" role="dialog" aria-modal="true">
            <div className="fixed inset-0 z-50 bg-black opacity-50" onClick={toggleMobileMenu}></div>
            <div className="fixed inset-y-0 h-72 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-full sm:ring-1 sm:ring-gray-900/10 ">
                {/* Btn CloseMenu */}
                <div className="flex items-center justify-end">
                    <button
                        className={`text-center ${isCloseBtnAnimating ? 'animate-spin animate-once animate-duration-[200ms] animate-ease-linear' : ''}`}
                        type="button"
                        onClick={handleCloseMenu}
                    >
                        <span className="sr-only">Close menu</span>
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                {/* ==Btn CloseMenu== */}

                <div className="mt-6 flow-root">
                    <div className="-my-6 divide-y divide-gray-500/10">
                        <div className="py-6 flex gap-4 flex-col items-end">
                            {navigationLinksToBeRender}
                        </div>
                        <div className="py-6">
                            {/* Auth Btns on Mobile */}
                            <div className="flex gap-2 sm:flex justify-end">
                                <AuthButtons isTokenExist={isTokenExist} handleLogout={handleLogout} toggleModal={toggleModal} setAuthModalType={setAuthModalType} userData={userData} />

                            </div>
                            {/* ==Auth Btns on Mobile== */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

import AuthButtons from "./AuthButtons";
import AuthModal from "./AuthModal";
import MobileNav from "./MobileNav";
import NavigationLinks from "./NavigationLinks";
import { useContext } from "react";
import { AuthBtnsContext } from "../contexts/AuthBtnsContext";

export default function AppBar() {

    const {
        activeLink,
        setActiveLink,
        toggleMobileMenu,
        isMobileMenuOpen
    } = useContext(AuthBtnsContext)

    return (

        <div>
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

                    </nav>
                </div>

            </header>

        </div>
    )
}

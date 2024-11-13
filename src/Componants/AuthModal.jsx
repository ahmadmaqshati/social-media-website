import LoginModal from './LoginModal';
import SignupModal from './SignupModal';
import { useContext } from 'react';
import { AuthBtnsContext } from '../contexts/AuthBtnsContext';
export default function AuthModal() {

    // Use context to access authentication-related information and functions
    // Destructure necessary values and functions from AuthBtnsContext 
    const { isAuthModalOpen,
        toggleModal,
        authType,
        setIsTokenExist,
        userData,
        setUserData,
        notifyLoginSuccess
    } = useContext(AuthBtnsContext);
    return (
        <>
            {isAuthModalOpen && (

                <div className="animate-fade-down animate-delay-150 animate-once fixed inset-0 flex items-center justify-center z-50">

                    <div onClick={toggleModal} className="absolute inset-0 bg-black opacity-50"></div>

                    <div className="mx-6 bg-white rounded-lg p-8 z-50 w-96 bg-gradient-to-br from-teal-400 to-gray-700">

                        {/* Render the login or signup form based on the auth type */}
                        {authType == 'login' ? (
                            <LoginModal
                                toggleModal={toggleModal}
                                setIsTokenExist={setIsTokenExist}
                                setUserData={setUserData}
                                notifyLoginSuccess={notifyLoginSuccess}
                            />
                        ) : (
                            <SignupModal toggleModal={toggleModal} />
                        )}

                    </div>
                </div>
            )

            }

        </>
    );
}
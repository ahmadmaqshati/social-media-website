import { createContext } from "react";

export let AuthBtnsContext = createContext({
    toggleModal: null,
    setAuthModalType: null,
    isTokenExist: false,
    handleLogout: null,
    userData: {
        username: '',
        profile_image: '',
    },
    setUserData: null,
    setIsTokenExist: null,
    isAuthModalOpen: null,
    notifyLoginSuccess: null
})



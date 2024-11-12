import { useState } from "react";
import axios from "axios";
export default function LoginModal({ toggleModal, setTokenExist, setUserData, notifyLoginSuccess }) {
    const [loginInputs, setLoginInputs] = useState({
        usernameInput: 'ahamdyarob',
        passwordInput: '123456'
    })

    // Function to handle changes in input fields and update the state accordingly
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setLoginInputs(currentInputs => ({
            ...currentInputs, [name]: value
        }));
        // Dynamically update the field with the [name] from the input
        /*  The [name] attribute of the input is used as the key 
        to update the correct field in the state */
    };

    async function handleLoginSubmit(event) {
        event.preventDefault();
        const params = {
            "username": loginInputs.usernameInput,
            "password": loginInputs.passwordInput
        };

        const baseUrl = 'https://tarmeezAcademy.com/api/v1/'

        try {
            const res = await axios.post(`${baseUrl}login`, params); // Send login request

            // Destructure 'token' and 'user' objects from the response data
            const { token, user } = res.data;

            // Destructure 'username' and 'profile_image' from the 'user' object
            const { username, profile_image } = user;

            localStorage.setItem("token", token);
            localStorage.setItem("userData", JSON.stringify(user))

            // Update token state to true to indicate user is logged in
            setTokenExist(true);
            // Update the user data state
            setUserData({ username, profile_image })

            notifyLoginSuccess(); // Notify the user of a successful login
            toggleModal();   // Close the authentication modal
        }
        catch (error) {
            console.error("Login failed:", error.response.data.message);
            toast.error(`Login failed:${error.response.data.message} Please try again.`, { position: 'top-right', autoClose: 4000 });
        }
    }

    return (
        <div className="animate-fade-down animate-delay-150 animate-once fixed inset-0 flex items-center justify-center z-50">

            {/* Background overlay that darkens the screen when the modal is open. */}
            <div onClick={toggleModal} className="absolute inset-0 bg-black opacity-50"></div>

            {/* Modal container: a centered white box with a gradient background and padding */}
            <div className="mx-6 bg-white rounded-lg p-8 z-50 w-96 bg-gradient-to-br from-teal-400 to-gray-700">

                {/* Modal title */}
                <h2 className="tracking-normal text-shadow text-shadow-custom text-2xl font-bold mb-4">
                    Login
                </h2>

                {/* Form for user login */}
                <form onSubmit={handleLoginSubmit}>

                    {/* Username input field */}
                    <div className="mb-4">
                        <label className="tracking-wide block text-gray-700 mb-2">UserName :</label>
                        <input
                            value={loginInputs.usernameInput}
                            // Updating the state on input change
                            onChange={handleInputChange}
                            type="text"
                            name="usernameInput"
                            className="border border-gray-300 rounded py-2 px-3 w-full"
                        />
                    </div>

                    {/* Password input field */}
                    <div className="mb-4">
                        <label className="tracking-wide block text-gray-700 mb-2">Password :</label>
                        <input
                            value={loginInputs.passwordInput}
                            // Updating the state on input change
                            onChange={handleInputChange}
                            type="password"
                            name="passwordInput"
                            className="border border-gray-300 rounded py-2 px-3 w-full"
                        />
                    </div>

                    {/* Submit button for login */}
                    <button
                        type="submit"
                        className="tracking-widest bg-blue-500 text-white px-4 py-2 rounded transition duration-300 transform hover:bg-blue-600 hover:scale-105">
                        Login
                    </button>

                </form>

                {/* Button to close the modal */}
                <button
                    onClick={toggleModal}
                    className="tracking-widest text-red-800 underline transition duration-300 hover:text-blue-700 mt-4"
                >
                    Close
                </button>

            </div>
        </div>
    );
}

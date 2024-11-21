import { useState } from "react";
export default function SignupModal({ toggleModal }) {

    const [signupInputs, setSignupInputs] = useState({
        file: '',
        name: 'John Doe',
        usernameInput: 'johndoe123',
        passwordInput: 'password123'
    })

    // Function to handle changes in input fields and update the state accordingly
    function handleInputChange(e) {
        const { value, name } = e.target
        setSignupInputs((currentInputs) => ({
            ...currentInputs, [name]: value
        }))
        // Dynamically update the field with the [name] from the input
        /*  The [name] attribute of the input is used as the key 
        to update the correct field in the state */
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div onClick={toggleModal} className="absolute inset-0 bg-black opacity-50"></div>

            <div className="mx-6 bg-white rounded-lg p-8 z-50 w-96 bg-gradient-to-br from-teal-400 to-gray-700">
                {/* Title of the form */}
                <h2 className="tracking-normal text-shadow text-shadow-custom text-2xl font-bold mb-4">Signup</h2>

                {/* Signup form */}
                <form>
                    {/* File input field */}
                    <div className="mb-4">
                        <label className="tracking-wide block text-gray-700 mb-2">File :</label>
                        <input
                            type="file"
                            className="border border-gray-300 rounded py-2 px-3 w-full"
                            value={signupInputs.file}
                            onChange={handleInputChange}
                            name="file"
                        />
                    </div>

                    {/* Name input field */}
                    <div className="mb-4">
                        <label className="tracking-wide block text-gray-700 mb-2">Name :</label>
                        <input
                            type="email"
                            className="border border-gray-300 rounded py-2 px-3 w-full"
                            value={signupInputs.name}
                            onChange={handleInputChange}
                            name="name"
                        />
                    </div>

                    {/* Username input field */}
                    <div className="mb-4">
                        <label className="tracking-wide block text-gray-700 mb-2">UserName :</label>
                        <input
                            type="text"
                            className="border border-gray-300 rounded py-2 px-3 w-full"
                            value={signupInputs.usernameInput} // Default value for the username
                            onChange={handleInputChange}
                            name="usernameInput"
                        />
                    </div>

                    {/* Password input field */}
                    <div className="mb-4">
                        <label className="tracking-wide block text-gray-700 mb-2">Password :</label>
                        <input
                            type="password"
                            className="border border-gray-300 rounded py-2 px-3 w-full"
                            value={signupInputs.passwordInput} // Default value for the password
                            onChange={handleInputChange}
                            name="passwordInput"
                        />
                    </div>

                    {/* Signup button */}
                    <button
                        type="submit"
                        className="tracking-widest bg-blue-500 text-white px-4 py-2 rounded transition duration-300 transform hover:bg-blue-600 hover:scale-105"
                    >
                        Signup
                    </button>
                </form>

                {/* Close button for the modal */}
                <button onClick={toggleModal}
                    className="tracking-widest text-red-800 underline transition duration-300 hover:text-blue-700 mt-4">
                    Close
                </button>
            </div>
        </div>



    );
}

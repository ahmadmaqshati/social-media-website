import { Link } from "react-router-dom";
export default function NavigationLinks({ activeLink, setActiveLink }) {

    const navigationLinks = [
        { name: 'Tarmeez', path: '/' },
        { name: 'Home', path: '/home' },
        { name: 'Profile', path: '/profile' }
    ];

    return (
        <>
            {
                navigationLinks.map((link, index) => (
                    <Link
                        key={index}
                        to={link.path}
                        onClick={() => setActiveLink(link.name)}
                        className={`font-semibold ${activeLink === link.name ? 'text-blue-600' : 'text-gray-600'}`}
                    >
                        {link.name}
                    </Link>
                ))
            }
        </>

    );
}

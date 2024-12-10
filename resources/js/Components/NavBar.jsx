import { useState } from "react";
import { Link } from "@inertiajs/react";

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <>
            <header className="relative z-10 p-4 flex justify-between items-center text-black">
                <Link href="/" className="flex items-center">
                    <img
                        src="images/ilogo.png"
                        alt="Logo"
                        className="w-12 h-12 mr-4 rounded-full cursor-pointer"
                        
                    />
                    <p className="text-base font-sans font-bold">iWALKBYFAITH</p>
                </Link>
                <nav className="hidden sm:flex space-x-6 items-center">
                    <Link href="/" className="hover:text-black hover:bg-green-400 rounded py-2 px-4 text-sm md:text-base">
                        Home
                    </Link>
                    <Link href="/services" className="hover:text-black hover:bg-green-400 rounded py-2 px-4 text-sm md:text-base">
                        Services
                    </Link>
                    <Link href="/collections" className="hover:text-black hover:bg-green-400 rounded py-2 px-4 text-sm md:text-base">
                        Collections
                    </Link>
                    <Link href="/contact-us" className="hover:text-black hover:bg-green-400 rounded py-2 px-4 text-sm md:text-base">
                        Contact Us
                    </Link>
                    <button className="border-black border rounded-lg px-4 py-2 hover:bg-green-400 hover:text-black">
                        Sign In
                    </button>
                    <button className="border border-black rounded-lg px-4 py-2 hover:bg-green-400 hover:text-black">
                        Sign Up
                    </button>
                </nav>
                <div className="sm:hidden">
                    <button onClick={toggleMenu} aria-label="Toggle Menu">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>
            </header>
            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-20">
                    <div className="bg-white w-3/4 max-w-md p-6 rounded-lg text-black relative">
                        <button
                            onClick={closeMenu}
                            className="absolute top-2 right-2 text-gray-600 hover:text-black"
                            aria-label="Close Menu"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                        <nav className="space-y-4">
                            <Link
                                href="/"
                                className="block hover:text-green-500 text-lg"
                                onClick={closeMenu}
                            >
                                Home
                            </Link>
                            <Link
                                href="/services"
                                className="block hover:text-green-500 text-lg"
                                onClick={closeMenu}
                            >
                                Services
                            </Link>
                            <Link
                                href="/collections"
                                className="block hover:text-green-500 text-lg"
                                onClick={closeMenu}
                            >
                                Collections
                            </Link>
                            <Link
                                href="/contact"
                                className="block hover:text-green-500 text-lg"
                                onClick={closeMenu}
                            >
                                Contact
                            </Link>
                            <button
                                className="block w-full border-black border rounded-lg bg-green-400 shadow-lg shadow-green-500/50 px-4 py-2 mt-4 hover:bg-green-400 hover:text-black"
                                onClick={closeMenu}
                            >
                                Sign In
                            </button>
                            <button
                                className="block w-full border-black border rounded-lg bg-green-400 shadow-lg shadow-green-500/50 px-4 py-2 mt-2 hover:bg-green-400 hover:text-black"
                                onClick={closeMenu}
                            >
                                Sign Up
                            </button>
                        </nav>
                    </div>
                </div>
            )}
        </>
    );
}

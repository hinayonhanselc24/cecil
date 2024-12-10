import WebsiteLayout from '@/Layouts/WebsiteLayout';
import NavBar from '@/Components/NavBar';
import { Head, useForm } from '@inertiajs/react';
import Footer from '@/Components/Footer';

export default function Contacts({ auth }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        image: '',
        name: '',
        pickup: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('project.store'), {
            onSuccess: () => reset(),
        });
    };

    return (
        <WebsiteLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Contacts
                </h2>
            }
        >
            <Head title="Contacts" />
            <NavBar />
            <div className="relative w-full mb-[1in]">
                <div className="flex flex-col items-center justify-center text-black py-8 px-4">
                    <h1 className="text-2xl sm:text-6xl font-bold mb-4 text-center">
                        Contact Us
                    </h1>
                    <p className="text-sm sm:text-base text-center mb-6">
                        Any questions or remarks? Just write us a message!
                    </p>
                    <div className="w-full max-w-4xl flex flex-col md:flex-row flex-wrap gap-4 justify-center mt-[1in]">
                        <div className="flex-1 border rounded-lg p-4 md:p-6 bg-green-100 shadow">
                            <h2 className="text-xl sm:text-2xl font-semibold mb-4">
                                Contact Information
                            </h2>
                            <p className="text-sm sm:text-base">
                                Say something to start a live chat!
                            </p>
                            <div className="mt-16 w-full max-w-4xl flex flex-col md:flex-row flex-wrap gap-4 justify-start items-center">
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    viewBox="0 0 24 24" 
                                    className="w-6 h-6" 
                                    fill="currentColor"
                                >
                                    <path d="M21.384,17.752a2.108,2.108,0,0,1-.522,3.359,7.543,7.543,0,0,1-5.476.642C10.5,20.523,3.477,13.5,2.247,8.614a7.543,7.543,0,0,1,.642-5.476,2.108,2.108,0,0,1,3.359-.522L8.333,4.7a2.094,2.094,0,0,1,.445,2.328A3.877,3.877,0,0,1,8,8.2c-2.384,2.384,5.417,10.185,7.8,7.8a3.877,3.877,0,0,1,1.173-.781,2.092,2.092,0,0,1,2.328.445Z" />
                                </svg>
                                <p className="font-body text-md hover:underline cursor-pointer">
                                    <a href="tel:+18185152927" className="text-black hover:underline">
                                        +1 818-515-2927
                                    </a>
                                </p>
                            </div>
                            <div className="mt-8 w-full max-w-4xl flex flex-col md:flex-row flex-wrap gap-4 justify-start items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-7 h-7">
                                    <path d="M256 73.825a182.18 182.18 0 0 0-182.18 182.18c0 100.617 81.567 182.17 182.18 182.17a182.175 182.175 0 1 0 0-364.35zm-93.061 115.972h186.127l.008.03L256 247.865l-93.07-58.04zm202.195 122.598a19.522 19.522 0 0 1-19.52 19.52H166.378a19.525 19.525 0 0 1-19.52-19.52V209.317a19.926 19.926 0 0 1 .308-3.34l102.998 64.23c.132.08.264.132.396.211.132.07.272.14.413.211a10.967 10.967 0 0 0 2.242.87c.079.018.157.044.236.061a11.318 11.318 0 0 0 2.541.317h.017a11.35 11.35 0 0 0 2.544-.317c.075-.017.154-.043.234-.06a11.582 11.582 0 0 0 2.25-.87c.132-.07.272-.14.408-.212.128-.079.268-.132.392-.211l102.99-64.23a19.025 19.025 0 0 1 .307 3.34v103.078z" data-name="Mail"/>
                                </svg>
                                <p className="font-body text-md hover:underline cursor-pointer">
                                    <a href="mailto:cecil@iwalkbypcs.com" className="text-black">
                                        cecil@iwalkbypcs.com
                                    </a>
                                </p>
                            </div>
                            <div className="mt-6 w-full max-w-4xl flex flex-col md:flex-row flex-wrap gap-4 justify-start items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="w-6 h-6">
                                    <path d="M32 5a21 21 0 0 0-21 21c0 17 21 33 21 33s21-16 21-33A21 21 0 0 0 32 5zm0 31a10 10 0 1 1 10-10 10 10 0 0 1-10 10z"/>
                                </svg>
                                <p className="font-body text-md hover:underline cursor-pointer ml-2">
                                    <a href="tel:+18185152927" className="text-black">
                                        Las Vegas NV, USA 702
                                    </a>
                                </p>
                            </div>
                        </div>
                        <form onSubmit={submit} className="w-full max-w-lg space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="relative z-0 w-full mb-4 group">
                                    <input
                                        type="text"
                                        name="first_name"
                                        id="first_name"
                                        className="block py-2 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                                        placeholder=" "
                                        value={data.first_name}
                                        onChange={(e) => setData('first_name', e.target.value)}
                                        required
                                    />
                                    <label
                                        htmlFor="first_name"
                                        className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-green-600"
                                    >
                                        First Name
                                    </label>
                                    {errors.first_name && <span className="text-red-600 text-sm">{errors.first_name}</span>}
                                </div>
                                <div className="relative z-0 w-full mb-4 group">
                                    <input
                                        type="text"
                                        name="last_name"
                                        id="last_name"
                                        className="block py-2 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                                        placeholder=" "
                                        value={data.last_name}
                                        onChange={(e) => setData('last_name', e.target.value)}
                                        required
                                    />
                                    <label
                                        htmlFor="last_name"
                                        className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-green-600"
                                    >
                                        Last Name
                                    </label>
                                    {errors.last_name && <span className="text-red-600 text-sm">{errors.last_name}</span>}
                                </div>
                                <div className="relative z-0 w-full mb-4 group">
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        className="block py-2 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                                        placeholder=" "
                                        value={data.email}
                                        onChange={(e) => setData('email', e.target.value)}
                                        required
                                    />
                                    <label
                                        htmlFor="email"
                                        className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-green-600"
                                    >
                                        Email Address
                                    </label>
                                    {errors.email && <span className="text-red-600 text-sm">{errors.email}</span>}
                                </div>
                                <div className="relative z-0 w-full mb-4 group">
                                    <input
                                        type="phone_number"
                                        name="phone_number"
                                        id="phone_number"
                                        className="block py-2 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                                        placeholder=" "
                                        value={data.phone_number}
                                        onChange={(e) => setData('phone_number', e.target.value)}
                                        required
                                    />
                                    <label
                                        htmlFor="phone_number"
                                        className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-green-600"
                                    >
                                        Phone Number
                                    </label>
                                    {errors.phone_number && <span className="text-red-600 text-sm">{errors.phone_number}</span>}
                                </div>
                                <div className="relative z-0 mt-4 w-full mb-4 group">
                                    <input
                                        type="subject"
                                        name="subject"
                                        id="subject"
                                        className="block py-2 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                                        placeholder=" "
                                        value={data.subject}
                                        onChange={(e) => setData('subject', e.target.value)}
                                        required
                                    />
                                    <label
                                        htmlFor="subject"
                                        className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-green-600"
                                    >
                                        Subject
                                    </label>
                                    {errors.subject && <span className="text-red-600 text-sm">{errors.subject}</span>}
                                </div>
                            </div>

                            <div className="relative z-0 w-full mb-4 group">
                                <textarea
                                    name="message"
                                    id="message"
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                                    placeholder=" "
                                    rows="4"
                                    value={data.message}
                                    onChange={(e) => setData('message', e.target.value)}
                                    required
                                />
                                <label
                                    htmlFor="message"
                                    className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-green-600"
                                >
                                    Message
                                </label>
                                {errors.message && <span className="text-red-600 text-sm">{errors.message}</span>}
                            </div>
                            <div className="flex justify-center">
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="bg-green-600 text-white hover:text-black px-6 py-3 flex justify-center items-center rounded-md text-xl disabled:opacity-50"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </WebsiteLayout>
    );
}

import { useState } from "react";
import { Link } from "@inertiajs/react";
import { FlagIcon } from "react-flag-kit";

export default function Footer({children}) {

    const [isModalVisible, setIsModalVisible] = useState(false);
    
    // Function to show modal
    const showModal = () => {
        setIsModalVisible(true);
    };
    
    // Function to hide modal
    const hideModal = () => {
        setIsModalVisible(false);
    };

    return (
        <>
            <div className="relative z-0">
                {children}
                    <div className="w-4/5 max-w-[1400px] grid mx-auto max-sm:w-[90%] max-sm:px-0">
                        <div className="relative pt-24 pb-16 border-t-[1px] border-b-[1px] border-secondary-color border-opacity-40 max-sm:pt-14">
                            <div className="absolute left-1/2 top-[-70.8px] -translate-x-[50%] max-md:top-[-50px] max-sm:top-[-40px]">
                                <img
                                    alt="DM Plane Logo"
                                    loading="lazy"
                                    width="168"
                                    height="168"
                                    decoding="async"
                                    className="w-[140px] max-md:w-[100px] max-sm:w-[80px] rounded-full"
                                    src="/images/ilogo.png"
                                />
                            </div>
                            <div className={`border fixed top-[50svh] translate-y-[-50%] transition-all duration-300 bg-quaternary-color z-[99] py-8 max-sm:py-7 max-sm:px-5 px-10 w-[400px] max-sm:w-[290px] right-0 ${isModalVisible ? 'translate-x-0' : 'translate-x-full'}`}>
                                <div className="border rounded-xl inline-flex items-center relative">
                                    <button 
                                        className="text-black hover:text-secondary-color" 
                                        onClick={showModal}
                                        >
                                        <span className="relative z-20">
                                            <svg className="w-6 h-6 text-gray-800 dark:text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13"></path>
                                            </svg>
                                        </span>
                                    </button>
                                    <button 
                                        className="text-black hover:text-secondary-color" 
                                        onClick={hideModal}
                                        >
                                        <span className="relative z-20">
                                            <svg className="w-6 h-6 text-gray-800 dark:text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"></path>
                                            </svg>
                                        </span>
                                    </button>
                                </div>
                            <div className="h-[606px] border">
                                <h2 className="font-heading text-[86px] tracking-tight max-[1535px]:text-[80px] max-xl:text-[60px] max-lg:text-[52px] max-md:text-[44px] capitalize max-[380px]:text-[38px] !text-[22px] text-secondary-color text-center !leading-0 mx-auto leading-[1.1] mb-5">
                                    <span>Ready To <br /> Discover Philippines  <br /> with iWALKBY TOURS?</span>
                                </h2>
                                <div className="relative mx-auto pb-5 z-20 max-sm:pb-2">
                                    <form>
                                        <div className="relative">
                                            <input
                                                className="text-xs text-[#949393] block w-full border-[#6F6A5A] border focus:outline-none focus:shadow-none font-body rounded-md placeholder:text-[#949393] py-[14px] px-8 mb-[18px] max-sm:placeholder:text-center placeholder:opacity-100 max-sm:placeholder:text-[12px] placeholder:text-[12px] bg-quaternary-color !bg-opacity-100 opacity-90 max-sm:py-[10px]"
                                                placeholder="Name"
                                                type="text"
                                                name="name"
                                            />
                                        </div>
                                        <div className="relative">
                                            <input
                                                className="text-xs text-[#949393] block w-full border-[#6F6A5A] border focus:outline-none focus:shadow-none font-body rounded-md placeholder:text-[#949393] py-[14px] px-8 mb-[18px] max-sm:placeholder:text-center placeholder:opacity-100 max-sm:placeholder:text-[12px] placeholder:text-[12px] bg-quaternary-color !bg-opacity-100 opacity-90 max-sm:py-[10px]"
                                                placeholder="Email Address"
                                                type="email"
                                                name="email"
                                            />
                                        </div>
                                        <div className="relative">
                                            <input
                                                className="text-xs text-[#949393] block w-full border-[#6F6A5A] border focus:outline-none focus:shadow-none font-body rounded-md placeholder:text-[#949393] py-[14px] px-8 mb-[18px] max-sm:placeholder:text-center placeholder:opacity-100 max-sm:placeholder:text-[12px] placeholder:text-[12px] bg-quaternary-color !bg-opacity-100 opacity-90 max-sm:py-[10px]"
                                                placeholder="Phone Number"
                                                type="tel"
                                                name="phone"
                                            />
                                        </div>
                                        <div role="group" aria-labelledby="location-selection" className="w-full max-lg:text-sm">
                                            <button
                                                type="button"
                                                className="flex h-9 w-full relative items-center border text-sm shadow-sm placeholder:text-slate-500 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 max-sm:focus-visible:outline-none dark:placeholder:text-slate-400 dark:bg-gray-700 dark:border-gray-900 [&[data-state=open]_svg]:rotate-180 [&>span]:text-[12px] font-body text-[rgba(255,255,255,0.4)] capitalize rounded-[5px] py-[20px] px-8 max-sm:placeholder:text-center mb-[18px] placeholder:opacity-100 max-sm:placeholder:text-[12px] placeholder:text-[12px] bg-quaternary-color !bg-opacity-100 opacity-90 max-sm:py-[10px] justify-start [&>span>span]:text-[rgba(148,147,147,.9)] border-[rgba(166,151,105,.7)] max-sm:justify-center [&>span]:text-[#949393]"
                                            >
                                                <span style={{ pointerEvents: 'none' }}>
                                                    <span className="text-gray-500 font-body !text-[12px] !text-[#949393]">Where would you like to go?</span>
                                                </span>
                                                <div className="absolute arrowIcon right-[5px] top-1/2 -translate-y-1/2" aria-hidden="true">
                                                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-all text-secondary-color ease-in-out duration-300 w-5 h-5">
                                                        <path d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                                                    </svg>
                                                </div>
                                            </button>
                                        </div>
                                        <select aria-hidden="true" tabIndex="-1" style={{ position: 'absolute', border: '0', width: '1px', height: '1px', padding: '0', margin: '-1px', overflow: 'hidden', clip: 'rect(0px, 0px, 0px, 0px)', whiteSpace: 'nowrap', overflowWrap: 'normal' }}>
                                            <option value=""></option>
                                            <option value="5">Argentina</option>
                                            <option value="98">Australia</option>
                                            <option value="10">Bolivia</option>
                                            <option value="13">Brazil</option>
                                            <option value="26">Chile</option>
                                            <option value="30">Colombia</option>
                                            <option value="48">Costa Rica</option>
                                            <option value="57">Cuba</option>
                                            <option value="87">Ecuador</option>
                                            <option value="89">El Salvador</option>
                                            <option value="78">Guatemala</option>
                                            <option value="14">Honduras</option>
                                            <option value="19">Mexico</option>
                                            <option value="83">Nicaragua</option>
                                            <option value="64">Panama</option>
                                            <option value="16">Paraguay</option>
                                            <option value="24">Peru</option>
                                            <option value="40">Uruguay</option>
                                        </select>
                                        <div className="flex justify-between">
                                            <div className="block mb-2">
                                                <button
                                                    className="transition-all duration-300 border border-secondary-color text-secondary-color w-full px-8 py-4 hover:bg-secondary-color hover:text-quaternary-color text-sm rounded-lg"
                                                    onClick={hideModal}
                                                >
                                                    Submit
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        {/* <div className="border rounded-xl inline-flex items-center">
                            <button 
                                className="text-black hover:text-secondary-color" 
                                onClick={showModal}
                            >
                                <span className="relative z-20">
                                    <svg className="w-6 h-6 text-gray-800 dark:text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13"></path>
                                    </svg>
                                </span>
                            </button>
                            <button 
                                className="text-black hover:text-secondary-color" 
                                onClick={hideModal}
                            >
                                <span className="relative z-20">
                                    <svg className="w-6 h-6 text-gray-800 dark:text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"></path>
                                    </svg>
                                </span>
                            </button>
                        </div> */}

                        <div className="grid grid-cols-[2fr_2.5fr_2fr] max-xl:grid-cols-3 gap-10 max-[900px]:grid-cols-1 max-sm:gap-2 max-lg:gap-5">
                            <div className="max-sm:mb-10">
                                <div className=" text-black mb-12 max-w-[200px] max-[900px]:mb-6 max-sm:mx-auto">
                                    <div className="flex justify-center items-center">
                                        <a href="/">
                                            <img
                                            src="/images/ilogo.png"
                                            alt="New Logo"
                                            width="90"   
                                            height="50"   
                                            className="max-sm:hidden rounded-full"   
                                            />
                                        </a>
                                        <h1 className="underline text-m font-bold ml-4">iWALKBY</h1>
                                    </div>
                                </div>

                                <div className="mb-8 max-[900px]:mb-5 max-sm:text-center">
                                    <div className="font-body link-color 2xl:text-md max-2xl:text-sm text-black opacity-80 leading-snug max-xl:text-[14px] mb-5 !text-[12px]">
                                        <p>
                                            iWALKBY service curates plans that cater perfectly to this mindset, as they provide the freedom to explore and experience a destination on one’s own terms.
                                        </p>
                                    </div>
                                </div>

                                <div className="mb-12 max-sm:text-center">
                                    <p className="font-body 2xl:text-md max-2xl:text-sm text-black opacity-80 mb-5 leading-snug max-xl:text-[14px] !text-[12px] max-sm:w-[70%] max-sm:mx-auto">
                                        Las Vegas NV, USA 702
                                    </p>
                                    <p className="font-body 2xl:text-md hover:underline cursor-pointer max-2xl:text-sm text-black opacity-80 mb-5 leading-snug max-xl:text-[14px] !text-[12px]">
                                        Email: 
                                        <a href="mailto:cecil@iwalkbypcs.com" className="hover:underline text-black">
                                            cecil@iwalkbypcs.com
                                        </a>
                                    </p>
                                    <div className="flex gap-4 max-sm:justify-center">
                                        <p className="font-body 2xl:text-md max-2xl:text-sm text-black opacity-80 leading-snug max-xl:text-[14px] !text-[12px] mb-1">
                                            WhatsApp No:
                                        </p>
                                        <div>
                                            <div className="flex items-center mb-1">
                                                <FlagIcon code="US" size={15} className="mr-2" />
                                                <a target="_blank" rel="noopener noreferrer" className="block" href="https://wa.me/18185152927">
                                                    <p className="font-body 2xl:text-md max-2xl:text-sm text-black opacity-80 leading-snug max-xl:text-[14px] !text-[12px] hover:text-secondary-color transition-all hover:underline">
                                                    18185152927
                                                    </p>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className="flex w-1/4 justify-between max-sm:mx-auto max-sm:w-1/6 ">
                                    <div className="group relative">
                                        <a href="https:www.facebook.com/AffordableVanForRentInCebuCity" target="_blank">
                                            <img
                                                alt="iWALKBY Facebook"
                                                loading="lazy"
                                                width="14"
                                                height="24"
                                                className="h-[25px] w-[25px] sm:h-[30px] sm:w-[30px] md:h-[30px] md:w-[30px] lg:h-[35px] lg:w-[35px]"
                                                // src="/images/fb.png"
                                            />
                                            <span className="text-body absolute text-black text-sm opacity-0 group-hover:opacity-60 left-0 -translate-x-[35%] transition-all">Facebook</span>
                                        </a>
                                    </div>
                                    <div className="group relative">
                                        <a href="https://wa.me/639678336264" target="_blank">
                                            <img
                                                alt="iWALKBY WhatsApp"
                                                loading="lazy"
                                                width="14"
                                                height="24"
                                                className="h-[25px] w-[25px] sm:h-[30px] sm:w-[30px] md:h-[30px] md:w-[30px] lg:h-[35px] lg:w-[35px]"
                                                src="/images/whatsapp.png"
                                            />
                                            <span className="text-body absolute text-black text-sm opacity-0 group-hover:opacity-60 left-0 -translate-x-[35%] transition-all">WhatsApp</span>
                                        </a>
                                    </div>

                                    {/* <div className="group relative">
                                        <a href="https://www.facebook.com/AffordableVanForRentInCebuCity" target="_blank">
                                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" className="group-hover:translate-y-[-5px] transition-all text-[26px] max-sm:text-[20px] fill-secondary-color">
                                                <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
                                            </svg>
                                            <span className="text-body absolute text-black text-sm opacity-0 group-hover:opacity-60 left-0 -translate-x-[35%] transition-all">Twitter</span>
                                        </a>
                                    </div> */}
                                </div>
                            </div>
                            <div className="max-sm:mx-auto max-sm:text-center text-black">
                                <div className="mb-16 mt-6 relative">
                                    <h3 className="font-heading text-secondary-color capitalize mb-5 text-[22px] font-medium after:content-[''] after:absolute after:-bottom-[25px] max-sm:after:-bottom-[15px] after:left-0 max-sm:after:left-1/2 after:w-[40px] max-sm:after:w-[25px] after:h-[3px] max-sm:after:h-[2px] max-sm:after:-translate-x-[35%] after:bg-secondary-color">
                                        <span>Blogs</span>
                                    </h3>
                                </div>
                                <div>
                                    <ul className="flex justify-between gap-x-3 max-sm:block max-[900px]:justify-start max-[900px]:gap-x-20 ">
                                        <li>
                                            <div className="mb-6 max-sm:mb-5 text-[14px] font-medium ">
                                                <a className="text-secondary-color uppercase underline underline-offset-2 font-body text-xs 2xl:text-sm no-underline text-[11px] capitalize " href="/about-us">About Us</a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                                <div className="max-sm:mx-auto max-sm:text-center text-black">
                                    <div className="mb-16 mt-6 relative">
                                        <h3 className="font-heading text-secondary-color capitalize mb-5 text-[22px] font-medium after:content-[''] after:absolute after:-bottom-[25px] max-sm:after:-bottom-[15px] after:left-0 max-sm:after:left-1/2 after:w-[40px] max-sm:after:w-[25px] after:h-[3px] max-sm:after:h-[2px] max-sm:after:-translate-x-[35%] after:bg-secondary-color">
                                            <span>Links</span>
                                        </h3>
                                    </div>
                                    <div>
                                        <ul className="flex justify-between gap-x-3 max-sm:block max-[900px]:justify-start max-[900px]:gap-x-20 ">
                                            <li>
                                                <div className="mb-6 max-sm:mb-5 text-[14px] font-medium ">
                                                    <a className="text-secondary-color uppercase underline underline-offset-2 font-body text-xs 2xl:text-sm no-underline text-[11px] capitalize hover:underline " href="/">Home</a>
                                                </div>
                                                <div className="mb-6 max-sm:mb-5 text-[14px] font-medium ">
                                                    <a className="text-secondary-color uppercase underline underline-offset-2 font-body text-xs 2xl:text-sm no-underline text-[11px] capitalize hover:underline " href="/about-us">About Us</a>
                                                </div>
                                                <div className="mb-6 max-sm:mb-5 text-[14px] font-medium">
                                                    {/* <a className="text-secondary-color uppercase underline underline-offset-2 font-body text-xs 2xl:text-sm no-underline text-[11px] capitalize" href="/holiday-types">Holiday Types</a> */}
                                                    <a className="text-secondary-color uppercase underline underline-offset-2 font-body text-xs 2xl:text-sm no-underline text-[11px] capitalize hover:underline" href="/privacy-policy">Privacy Policy</a>
                                                </div>
                                            {/* <div className="mb-6 max-sm:mb-5 text-[14px] font-medium">
                                                    <a className="text-secondary-color uppercase underline underline-offset-2 font-body text-xs 2xl:text-sm no-underline text-[11px] capitalize" href="/inspirations">Inspirations</a>
                                                </div> */}
                                                <div className="mb-6 max-sm:mb-5 text-[14px] font-medium">
                                                    <a data-state="closed">
                                                        <span className="font-body text-[12px] text-secondary-color">Shop</span>
                                                    </a>
                                                </div>
                                                <div className="mb-6 max-sm:mb-5 text-[14px] font-medium">
                                                    <a className="text-secondary-color uppercase underline underline-offset-2 font-body text-xs 2xl:text-sm no-underline text-[11px] capitalize hover:underline" href="/contact-us">Contact Us</a>
                                                </div>
                                            </li>
                                            <li>
                                            {/* <div className="mb-6 max-sm:mb-5 text-[14px] font-medium"> */}
                                                {/* <a className="text-secondary-color uppercase underline underline-offset-2 font-body text-xs 2xl:text-sm no-underline text-[11px] capitalize" href="/privacy-policy">Privacy Policy</a> */}
                                                {/* </div> */}
                                                <div className="mb-6 max-sm:mb-5 text-[14px] font-medium">
                                                    <a className="text-secondary-color uppercase underline underline-offset-2 font-body text-xs 2xl:text-sm no-underline text-[11px] capitalize hover:underline" href="/cookies-policy">Cookie Policy</a>
                                                </div>
                                                <div className="mb-6 max-sm:mb-5 text-[14px] font-medium">
                                                    <a className="text-secondary-color uppercase underline underline-offset-2 font-body text-xs 2xl:text-sm no-underline text-[11px] capitalize hover:underline" href="/terms-and-conditions">Terms &amp; Conditions</a>
                                                </div>
                                                <div className="mb-6 max-sm:mb-5 text-[14px] font-medium">
                                                    <a className="text-secondary-color uppercase underline underline-offset-2 font-body text-xs 2xl:text-sm no-underline text-[11px] capitalize hover:underline" href="/become-a-partner">Become A Partner</a>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                <div className="py- mx-auto max-sm:py-8 text-center">
                    <p className="font-body 2xl:text-md max-2xl:text-sm text-black opacity-80 mb-5 leading-snug max-xl:text-[14px] !mb-0 !text-[11px] max-sm:text-center max-sm:w-[100%] max-sm:mx-auto max-sm:text-[12px]">© 2025 iWALKBYFAITH. Powered By &nbsp;
                        <a className="text-secondary-color !opacity-100 font-extrabold !text-[12x] max-sm:block max-sm:-mt-1" target="_blank" href="https://">ANONYMOUS</a>
                    </p>
                </div>
            </div>
        </>
    );
}

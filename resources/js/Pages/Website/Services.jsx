import WebsiteLayout from '@/Layouts/WebsiteLayout';
import NavBar from '@/Components/NavBar';
import { Head } from '@inertiajs/react';
import Footer from '@/Components/Footer';
import { useVideoIntersectionObserver } from '@/hooks/useVideoIntersectionObserver';
import Carousel from '@/Components/Carousel';
import { bfcarouselItems, eetcarouselItems, dtcarouselItems} from '@/hooks/carouselItems';

export default function Services({ auth }) {

    const videoRef = useVideoIntersectionObserver();
    const longDistanceTravelVideoRef = useVideoIntersectionObserver();
    const airportTransfer = useVideoIntersectionObserver();

    const redirect = () => {
        window.location.href = '/contact-us';
    }

    return (
        <WebsiteLayout
        user={auth.user}
        header={
            <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Home
                </h2>
            }
            >
            <Head title="Home" />
            <NavBar />
                <div className="relative w-full">
                    <div className="relative flex flex-col items-center justify-center text-black py-16 px-4">
                        <h1 className="text-4xl sm:text-6xl font-bold mt-8 mb-6 text-center">
                            Our Services
                        </h1>
                        <p className="max-w-4xl text-base sm:text-lg md:text-xl text-center mb-4">
                            Bringing excellence to Las Vegas, NV – our services are designed to meet the unique needs of this vibrant city, ensuring quality and satisfaction every time.
                        </p>
                        <div onClick={redirect} className="max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-[1in] mt-10">
                            <div className='border-2 rounded-lg cursor-pointer hover:shadow-green-300 shadow-2xl'>
                                <Carousel items={bfcarouselItems} className="px-2"/>
                                <div className="max-sm:mb-10">
                                        <h1 className="text-2xl text-center font-bold px-6">Luxury Transportation on the Las Vegas Strip</h1>
                                        <p className='text-center mt-4'>
                                            Experience the Glitz and Glamour in Style
                                        </p>
                                    <div className=" text-black mb-12 max-w-[200px] max-[900px]:mb-6 max-sm:mx-auto">
                                    </div>
                                    <div className="mb-8 max-[900px]:mb-5 max-sm:text-center">
                                        <div className="font-body link-color text-justify indent-8 2xl:text-md max-2xl:text-sm px-4 text-black opacity-80 leading-snug max-xl:text-[14px] mb-5 !text-[12px]">
                                            <p>
                                                Explore the iconic Las Vegas Strip in luxury and comfort. Whether it’s a night out visiting top attractions like the Bellagio Fountains, The Venetian Resort, or the High Roller, our chauffeur service ensures a seamless and stylish experience. No need to navigate traffic or find parking—leave the driving to us.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='border-2 rounded-lg cursor-pointer hover:shadow-green-300 shadow-2xl'>
                                <Carousel items={eetcarouselItems} className="px-2"/>
                                <div className="max-sm:mb-10">
                                        <h1 className="text-2xl text-center font-bold px-6">Exclusive Entertainment Transfers</h1>
                                        <p className='text-center mt-4'>
                                            Arrive at Shows and Events in Style
                                        </p>
                                    <div className=" text-black mb-12 max-w-[200px] max-[900px]:mb-6 max-sm:mx-auto">
                                    </div>
                                    <div className="mb-8 max-[900px]:mb-5 max-sm:text-center">
                                        <div className="font-body link-color text-justify indent-8 2xl:text-md max-2xl:text-sm px-4 text-black opacity-80 leading-snug max-xl:text-[14px] mb-5 !text-[12px]">
                                            <p>
                                                Enjoy world-class entertainment without the hassle of logistics. From Cirque du Soleil productions to concerts by top artists, we’ll pick you up and drop you off right at the venue. Perfect for a worry-free night out, so you can focus on the fun.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='border-2 rounded-lg cursor-pointer hover:shadow-green-300 shadow-2xl'>
                                <Carousel items={dtcarouselItems} className="px-2"/>
                                <div className="max-sm:mb-10">
                                        <h1 className="text-2xl text-center font-bold px-6">Nature and Day Trip Tours</h1>
                                        <p className='text-center mt-4'>
                                            Discover the Beauty Beyond the Strip
                                        </p>
                                    <div className=" text-black mb-12 max-w-[200px] max-[900px]:mb-6 max-sm:mx-auto">
                                    </div>
                                    <div className="mb-8 max-[900px]:mb-5 max-sm:text-center">
                                        <div className="font-body link-color text-justify 2xl:text-md max-2xl:text-sm px-4 text-black opacity-80 leading-snug max-xl:text-[14px] mb-5 !text-[12px]">
                                            <p className='indent-8'> 
                                                We provide transportation to stunning natural attractions around Las Vegas, including:
                                            </p>
                                            <ul className="list-disc">
                                                <li className="list-inside">
                                                    Red Rock Canyon for hiking and sightseeing.
                                                </li>
                                                <li className="list-inside">
                                                    Hoover Dam for a historic and scenic tour.
                                                </li>
                                                <li className="list-inside">
                                                    Valley of Fire State Park for incredible red rock formations.
                                                </li>
                                                <li className="list-inside">
                                                    Experience the Grand Canyon West Rim Skywalk breathtaking.
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='border-2 rounded-lg cursor-pointer hover:shadow-green-300 shadow-2xl mt-4'>
                                <div className="text-black mb-12 max-w-full max-[900px]:mb-6 max-sm:mx-auto">
                                    <video
                                    ref={videoRef}
                                    className="w-full h-[300px] max-w-full mx-auto object-cover"
                                    loop
                                    muted
                                    >
                                    <source src="/videos/gmc.mp4" type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                                <div className="max-sm:mb-10">
                                        <h1 className="text-2xl text-center font-bold px-6">Event Transportation</h1>
                                        <p className='text-center mt-4'>
                                            Seamless Service for Your Special Occasions
                                        </p>
                                    <div className=" text-black mb-12 max-w-[200px] max-[900px]:mb-6 max-sm:mx-auto">
                                    </div>
                                    <div className="mb-8 max-[900px]:mb-5 max-sm:text-center">
                                        <div className="font-body link-color text-justify indent-8 2xl:text-md max-2xl:text-sm px-4 text-black opacity-80 leading-snug max-xl:text-[14px] mb-5 !text-[12px]">
                                            <p>
                                                Whether it’s a wedding, anniversary, or a group event, we’ll handle the logistics. Our fleet includes spacious SUVs and luxury vehicles, perfect for small groups. Opt for a pickup and drop-off service to save on costs while enjoying professional and reliable transportation.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='border-2 rounded-lg cursor-pointer hover:shadow-green-300 shadow-2xl mt-4'>
                                <div className="text-black mb-12 max-w-full max-[900px]:mb-6 max-sm:mx-auto">
                                    <video
                                    ref={longDistanceTravelVideoRef}
                                    className="w-full h-[300px] max-w-full mx-auto object-cover"
                                    loop
                                    muted
                                    >
                                    <source src="/videos/ldt.mp4" type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                                <div className="max-sm:mb-10">
                                        <h1 className="text-2xl text-center font-bold px-6">Long-Distance Travel</h1>
                                        <p className='text-center mt-4'>
                                            Explore Beyond Las Vegas
                                        </p>
                                    <div className=" text-black mb-12 max-w-[200px] max-[900px]:mb-6 max-sm:mx-auto">
                                    </div>
                                    <div className="mb-8 max-[900px]:mb-5 max-sm:text-center">
                                        <div className="font-body link-color text-justify indent-8 2xl:text-md max-2xl:text-sm px-4 text-black opacity-80 leading-snug max-xl:text-[14px] mb-5 !text-[12px]">
                                            <p>
                                                Need to venture beyond the city? Our long-distance travel service offers comfortable and reliable rides to destinations across Nevada and neighboring states.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='border-2 rounded-lg cursor-pointer hover:shadow-green-300 shadow-2xl mt-4'>
                                <div className="text-black mb-12 max-w-full max-[900px]:mb-6 max-sm:mx-auto">
                                    <video
                                    ref={airportTransfer}
                                    className="w-full h-[300px] max-w-full mx-auto object-cover"
                                    loop
                                    muted
                                    >
                                    <source src="/videos/ar.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                    </video>
                                </div>
                                <div className="max-sm:mb-10">
                                        <h1 className="text-2xl text-center font-bold px-6">Airport Transfers</h1>
                                        <p className='text-center mt-4'>
                                            Start or End Your Trip in Comfort
                                        </p>
                                    <div className=" text-black mb-12 max-w-[200px] max-[900px]:mb-6 max-sm:mx-auto">
                                    </div>
                                    <div className="mb-8 max-[900px]:mb-5 max-sm:text-center">
                                        <div className="font-body link-color text-justify indent-8 2xl:text-md max-2xl:text-sm px-4 text-black opacity-80 leading-snug max-xl:text-[14px] mb-5 !text-[12px]">
                                            <p>
                                            Whether you’re flying into McCarran International Airport or heading out, our airport transfer service ensures a smooth, punctual, and luxurious journey. We monitor your flight schedules to provide timely pickups and drop-offs.    
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <Footer />
        </WebsiteLayout>
    );
}

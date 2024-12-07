import { useState } from 'react';
import { Link, Head, useForm, router } from '@inertiajs/react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import TextAreaInput from "@/Components/TextAreaInput";
import SelectInput from "@/Components/SelectInput";

export default function Welcome({queryParams = null}) {

    const searchFieldChanged = (name, value, queryParams = null ) => {
        queryParams = queryParams || {};
        if (value) {
            queryParams[name] = value;
        }else{
            delete queryParams[name];
        }
        
        router.get(route('project.index'), queryParams);
    }
    
    const onKeyPress = (name, e) => {
        if (e.key !== 'Enter') return;
        
        searchFieldChanged(name, e.target.value);
    }

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen); // Toggle the dropdown visibility
    };

    const { data, setData, post, processing, errors, reset } = useForm({
        image: '',
        name: '',
        pickup: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('project.store'), {
            onSuccess: () => {
                reset();    
            }
        });
    };


    return (
        <>
            <Head>
                <title>Welcome</title>
            </Head>
            <div className="min-h-screen flex flex-col">
                <div
                    className="flex-grow bg-cover bg-center"
                    style={{ backgroundImage: 'url(/images/cds.jpg)' }}
                >
                    <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                    <div className="relative z-10 p-4 flex justify-between mt-4 items-center text-white rounded-lg">
                        <div class="flex items-center">
                        <img src="images/bg.jpg" alt="Sample Image" class="w-12 h-12 mr-4 ml-6 rounded-full cursor-pointer"/>
                        <p class="text-base">iWALKBYFAITH</p>
                        </div>
                        <div className="hidden sm:flex space-x-6 items-center">
                        <div className="hover:text-gray-300 cursor-pointer transition duration-200 text-sm md:text-base">Home</div>
                        <div className="hover:text-gray-300 cursor-pointer transition duration-200 text-sm md:text-base">Services</div>
                        <div className="hover:text-gray-300 cursor-pointer transition duration-200 text-sm md:text-base">Collections</div>
                        <div className="hover:text-gray-300 cursor-pointer transition duration-200 text-sm md:text-base">Contacts</div>
                        {/* <div>
                            <TextInput 
                            defaultValue={queryParams?.name || ''} 
                            placeholder="Search"
                            onBlur={(e) => searchFieldChanged('name', e.target.value)} 
                            onKeyPress={(e) => onKeyPress('name', e)} 
                            className="text-sm md:text-base"
                            />
                        </div> */}
                        <button className="cursor-pointer transition duration-200 text-sm md:text-base border rounded-lg px-4 py-2 hover:bg-green-400 hover:text-black">Sign in</button>
                        <button className="cursor-pointer transition duration-200 text-sm md:text-base border rounded-lg px-4 py-2 hover:bg-green-400 hover:text-black">Sign up</button>
                        </div>
                        <div className="sm:hidden flex items-center">
                            <button onClick={toggleMenu} className="text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    {isOpen && (
                        <div className="sm:hidden absolute top-16 left-0 w-full bg-black bg-opacity-70 text-white p-4 space-y-4">
                            <div className="hover:text-gray-300 cursor-pointer">Home</div>
                            <div className="hover:text-gray-300 cursor-pointer">Services</div>
                            <div className="hover:text-gray-300 cursor-pointer">Collections</div>
                            <div className="hover:text-gray-300 cursor-pointer">Contacts</div>
                        </div>
                    )}
                    <div className="relative z-10 flex justify-start mt-6 items-center h-full">
                        <div className="text-center text-3xl sm:text-6xl mt-10 text-white drop-shadow-lg px-4 sm:px-6 md:px-8">
                            <h1>Personal Car Rental Services</h1>
                            <p className="mt-4 text-base sm:text-sm md:text-xl">Affordable and filixible car rentals options for every journey. Choose from a wide range </p>
                            <p className="text-left text-base sm:text-sm md:text-xl">of vehicles for hassle-free travel experiences.</p>
                            <form onSubmit={submit} className="border-2 rounded-lg max-w-xl mx-auto mt-6 p-4"> 
                                <div className="h-20 grid grid-cols-3 gap-4 content-start">
                            <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-green-700">Distance</button>
                            <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-green-700">Hourly</button>
                            <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-green-700">Flat Rate</button>
                                </div>
                                <div className="grid gap-4">
                                    <div className="sm:col-span-1">
                                        <InputLabel htmlFor="iwalk_pick_up_address" />
                                        <TextInput
                                            id="iwalk_pick_up_address"
                                            type="text"
                                            name="pick_up_address"
                                            placeholder="Pick Up Address"
                                            value={data.pick_up_address}
                                            className="mt-1 block w-full"
                                            autoComplete="tel"
                                            onChange={(e) => setData('pick_up_address', e.target.value)}
                                            required
                                        />
                                        <InputError message={errors.pick_up_address} className="mt-2" />
                                    </div>
                                    <div className="sm:col-span-1">
                                        <InputLabel htmlFor="iwalk_drop_off_address" />
                                        <TextInput
                                            id="iwalk_drop_off_address"
                                            type="text"
                                            name="drop_off_address"
                                            placeholder="Drop Off Address"
                                            value={data.drop_off_address}
                                            className="mt-1 block w-full"
                                            autoComplete="tel"
                                            onChange={(e) => setData('drop_off_address', e.target.value)}
                                            required
                                        />
                                        <InputError message={errors.drop_off_address} className="mt-2" />
                                    </div>
                                    <div className="sm:col-span-1">
                                        <InputLabel htmlFor="iwalk_no_pax" />
                                        <TextInput
                                            id="iwalk_no_pax"
                                            type="datetime-local"
                                            name="no_pax"
                                            placeholder="Pick Up Date/ Time"
                                            value={data.no_pax}
                                            className="mt-1 block w-full"
                                            autoComplete="tel"
                                            onChange={(e) => setData('no_pax', e.target.value)}
                                            required
                                        />
                                        <InputError message={errors.no_pax} className="mt-2" />
                                    </div>
                                        <button
                                            type="submit"
                                            className="text-white mt-4 text-xl px-4 justify-self-end rounded bg-green-400"
                                        >
                                            Search now
                                        </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

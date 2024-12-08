import WebsiteLayout from '@/Layouts/WebsiteLayout';
import NavBar from '@/Components/NavBar';
import { useState } from 'react';
import { Head, useForm, router } from '@inertiajs/react';
import Footer from '@/Components/Footer';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';

export default function Home({ auth }) {

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
            <div className="relative w-full mb-[1in]">
                <div className="relative flex flex-col items-center justify-center text-black">
                    <h1 className="text-4xl sm:text-6xl font-bold mt-8 mb-6 text-center">
                        Personal Car Service
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl text-center mb-4">
                        Affordable and flexible ride options for every journey. Enjoy hassle-free travel with a wide range
                    </p>
                    <p className="text-base sm:text-lg md:text-xl text-center">
                        of vehicles at your fingertips, ready to take you wherever you need to go.
                    </p>
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                        }}
                        className="max-w-xl w-full sm: bg-gray-500 bg-opacity-10 px-6 py-4 rounded-lg shadow-md mb-10 mt-6"
                    >
                        <div className="grid grid-cols-3 gap-4 mb-6">
                            <button
                                type="button"
                                className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-2.5"
                            >
                                Distance
                            </button>
                            <button
                                type="button"
                                className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-2.5"
                            >
                                Hourly
                            </button>
                            <button
                                type="button"
                                className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-2.5"
                            >
                                Flat Rate
                            </button>
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
                <Footer />
        </WebsiteLayout>
    );
}

import WebsiteLayout from '@/Layouts/WebsiteLayout';
import NavBar from '@/Components/NavBar';
import { useState } from 'react';
import { Head, useForm, router } from '@inertiajs/react';
import Footer from '@/Components/Footer';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';

export default function Collections({ auth }) {

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
                        Collections
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl text-center mb-4">
                        Dive into a world of possibilities—our collections are waiting to inspire you.
                    </p>
                </div>
            </div>
                <Footer />
        </WebsiteLayout>
    );
}

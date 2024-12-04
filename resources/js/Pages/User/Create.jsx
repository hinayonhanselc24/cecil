import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
// import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from "@inertiajs/react";
// import TextAreaInput from "@/Components/TextAreaInput";
import SelectInput from "@/Components/SelectInput";

export default function Create({auth, user }){

    const {data, setData, post, processing, errors, reset} = useForm({
        image: '',
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('user.store'), {
        });
    };

    return(
        <AuthenticatedLayout
        user={auth.user}
        header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Users</h2>}>
        
        <Head title="User" />

        <div className="py-12">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                    <div className="p-6 text-gray-900 dark:text-gray-100">
                    <form onSubmit={submit}>
                    <div>
                    <InputLabel htmlFor="user_image_path" value="User Image" />
                    <TextInput
                        id="user_image_path"
                        type="file"
                        name="image"
                        // value={data.image}
                        className="mt-1 block w-full"
                        autoComplete="name"
                        isFocused={true}
                        onChange={(e) => setData('image', e.target.files[0])}
                        required/>
                    <InputError message={errors.image} className="mt-2" />
                    </div>
                    <div className="mt-4">
                    <InputLabel htmlFor="user_name" value="User Name" />
                    <TextInput
                        id="user_name"
                        type="text"
                        name="name"
                        value={data.name}
                        className="mt-1 block w-full"
                        autoComplete="name"
                        isFocused={true}
                        onChange={(e) => setData('name', e.target.value)}
                        required/>
                    <InputError message={errors.name} className="mt-2" />
                    </div>
                    <div className="mt-4">
                    <InputLabel htmlFor="user_email" value="Email" />
                    <TextInput
                        id="user_email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="email"
                        isFocused={true}
                        onChange={(e) => setData('email', e.target.value)}
                        required/>
                    <InputError message={errors.email} className="mt-2" />
                    </div>
                    <div className="mt-4">
                    <InputLabel htmlFor="user_password" value="Password" />
                    <TextInput
                        id="user_password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="password"
                        isFocused={true}
                        onChange={(e) => setData('password', e.target.value)}
                        required/>
                    <InputError message={errors.password} className="mt-2" />
                    </div>
                    <div className="mt-4">
                    <InputLabel htmlFor="user_password_confirmation" value="Confirm Password" />
                    <TextInput
                        id="password_confirmation"
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-1 block w-full"
                        autoComplete="password_confirmation"
                        onChange={(e) => setData('password_confirmation', e.target.value)}
                        required/>
                    {/* <InputError message={errors.password} className="mt-2" /> */}
                    </div>
                    <div className="text-right mt-4">
                            <Link className="mt-4 text-white px-2 p-y rounded bg-gray-400 inline-block mr-2" href={route('user.index')}>Cancel</Link>
                        <button className="mt-4 text-white px-2 p-y rounded bg-green-400 inline-block mr-2">
                            Submit
                        </button>
                    </div>
                    </form>
                    </div>
                </div>
            </div>
        </div>
        
        
            
        </AuthenticatedLayout>

    )
}
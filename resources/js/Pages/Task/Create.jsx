import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
// import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from "@inertiajs/react";
import TextAreaInput from "@/Components/TextAreaInput";
import SelectInput from "@/Components/SelectInput";

export default function Create({auth, task }){

    const {data, setData, post, processing, errors, reset} = useForm({
        image: '',
        name: '',
        status: '',
        description: '',
        due_date: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('task.store'), {
        });
    };

    return(
        <AuthenticatedLayout
        user={auth.user}
        header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Tasks</h2>}>
        
        <Head title="task" />

        <div className="py-12">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                    <div className="p-6 text-gray-900 dark:text-gray-100">
                    <form onSubmit={submit}>
                    <div>
                    <InputLabel htmlFor="project_image_path" value="task Image" />
                    <TextInput
                        id="project_image_path"
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
                    <InputLabel htmlFor="project_name" value="task Name" />
                    <TextInput
                        id="project_name"
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
                    <InputLabel htmlFor="project_description" value="Description" />
                    <TextAreaInput
                        id="project_description"
                        type="text"
                        name="description"
                        value={data.description}
                        className="mt-1 block w-full"
                        autoComplete="description"
                        isFocused={true}
                        onChange={(e) => setData('description', e.target.value)}
                        required/>
                    <InputError message={errors.description} className="mt-2" />
                    </div>
                    <div className="mt-4">
                    <InputLabel htmlFor="project_due_date" value="Due Date" />
                    <TextInput
                        id="project_due_date"
                        type="date"
                        name="due_date"
                        value={data.due_date}
                        className="mt-1 block w-full"
                        autoComplete="due_date"
                        isFocused={true}
                        onChange={(e) => setData('due_date', e.target.value)}
                        required/>
                    <InputError message={errors.due_date} className="mt-2" />
                    </div>
                    <div className="mt-4">
                    <InputLabel htmlFor="project_status" value="Status" />
                    <SelectInput
                        id="project_status"
                        name="due_date"
                        value={data.status}
                        className="mt-1 block w-full"
                        autoComplete="status"
                        isFocused={true}
                        onChange={(e) => setData('status', e.target.value)}
                        required>
                            <option value=""></option>
                            <option value="pending">Pending</option>
                            <option value="in_progress">In Progress</option>
                            <option value="completed">Complete</option>
                        </SelectInput>
                    <InputError message={errors.status} className="mt-2" />
                    </div>

                    <div className="text-right mt-4">
                            <Link className="mt-4 text-white px-2 p-y rounded bg-gray-400 inline-block mr-2" href={route('task.index')}>Cancel</Link>
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
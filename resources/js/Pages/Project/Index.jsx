import Pagination from "@/Components/Pagination";
import SelectInput from "@/Components/SelectInput";
import TextInput from "@/Components/TextInput";
import { PROJECT_STATUS_CLASS_MAP, PROJECT_STATUS_TEXT_MAP } from "@/constants.js";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react"; 
// import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/16/solid"; 
import TableHeading from "@/Components/TableHeading";


export default function Index({auth, projects, queryParams = null, success}) {
// console.log("auth:", auth);
// console.log("projects:", projects);
queryParams = queryParams || {};

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
    
    const sortChanged = (name) => {
        queryParams = queryParams || {}; // Ensure queryParams is initialized
        
        if (name === queryParams.sort_field) {
            queryParams.sort_direction = queryParams.sort_direction === 'asc' ? 'desc' : 'asc';
        } else {
            queryParams.sort_field = name;
            queryParams.sort_direction = 'asc';
        }
        
        router.get(route('project.index'), queryParams);
    };

    const deleteProject = (project) => {
        if (confirm('Are you sure you want to delete this project?')) {
            router.delete(route('project.destroy', project), {
                onSuccess: () => alert('Project deleted successfully'),
                onError: (errors) => console.error(errors),
            });
        }
    };
    

    return (

        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex justify-between items-center">
                    <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                        Projects
                    </h2>
                    <Link
                        className="mt-4 px-2 p-y rounded bg-blue-400 inline-block mr-2" href={route('project.create', projects.id)}>Add new Project
                    </Link>
                </div>
            }
        >
            
            <Head title="Projects" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    {success && (<div className="bg-green-400 text-center rounded py-2 px-4 mb-4 inline-block">
                        {success}
                    </div>)}
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            {/* <pre>{JSON.stringify(projects, null, 2)}</pre> */}
                            <div className="overflow-auto"><table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b-2 border-gray-500">
                                    <tr className="text-nowrap">
                                        <TableHeading
                                        name ='id'
                                        sort_field={queryParams.sort_field}
                                        sort_direction={queryParams.sort_direction}
                                        sortChanged={sortChanged}
                                        >ID</TableHeading>
                                        <th className="px-3 py-3">Image</th>
                                        <TableHeading
                                        name ='name'
                                        sort_field={queryParams.sort_field}
                                        sort_direction={queryParams.sort_direction}
                                        sortChanged={sortChanged}
                                        >Name</TableHeading>
                                        <TableHeading
                                        name ='status'
                                        sort_field={queryParams.sort_field}
                                        sort_direction={queryParams.sort_direction}
                                        sortChanged={sortChanged}
                                        >Status</TableHeading>
                                        <TableHeading
                                        name ='created_at'
                                        sort_field={queryParams.sort_field}
                                        sort_direction={queryParams.sort_direction}
                                        sortChanged={sortChanged}
                                        >Created Date</TableHeading>
                                        <TableHeading
                                        name ='due_date'
                                        sort_field={queryParams.sort_field}
                                        sort_direction={queryParams.sort_direction}
                                        sortChanged={sortChanged}
                                        >Due Date</TableHeading>
                                        <th className="px-3 py-3">Created By</th>
                                        <th className="px-3 py-3 text-right">Actions</th>
                                    </tr>
                                </thead>
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b-2 border-gray-500">
                                    <tr className="text-nowrap">
                                        <th className="px-3 py-3"></th>
                                        <th className="px-3 py-3"></th>
                                        <th className="px-3 py-3">
                                            <TextInput 
                                            defaultValue={queryParams?.name || ''} 
                                            placeholder="Project Name"
                                            onBlur={(e) => searchFieldChanged('name', e.target.value)} 
                                            onKeyPress={(e) => onKeyPress('name', e)} 
                                            />
                                        </th>
                                        <th className="px-3 py-3">
                                            <SelectInput 
                                                className="w-full"
                                                defaultValue={queryParams?.status || ''}
                                                onChange={(e) => searchFieldChanged("status", e.target.value)}>
                                                <option value="">Select Status</option>
                                                <option value="pending">Pending</option>
                                                <option value="in_progress">In Progress</option>
                                                <option value="completed">Completed</option>
                                            </SelectInput>
                                        </th>
                                        <th className="px-3 py-3"></th>
                                        <th className="px-3 py-3"></th>
                                        <th className="px-3 py-3"></th>
                                        <th className="px-3 py-3 text-right"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* <pre>{JSON.stringfy(projects)}</pre> */}
                                    {projects.data.map((project) => (
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={project.id}>
                                        <td className="px-3 py-2">{project.id}</td>
                                        <td className="px-3 py-2"><img src={project.image_path} style={{width:60}}/>
                                        </td>
                                        <td className="px-3 py-2 hover:underline text-white">
                                            <Link href={route('project.show', project.id)}>{project.name}</Link>
                                        </td>
                                        <td className="px-3 py-2">
                                            <span className={"px-2 p-y rounded text-white " + PROJECT_STATUS_CLASS_MAP[project.status]}>
                                            {PROJECT_STATUS_TEXT_MAP[project.status]}
                                            </span>
                                        </td>
                                        <td className="px-3 py-2 text-nowrap">{project.created_at}</td>
                                        <td className="px-3 py-2 text-nowrap">{project.due_date}</td>
                                        <td className="px-3 py-2">{project.createdBy.name}</td>
                                        <td className="px-3 py-2">
                                            <Link href={route('project.edit', project.id )} className="font-medium text-blue-600 dark:text-blue-500 hover:underline mx-1">Edit</Link>
                                            {/* <Link href={route('project.destroy', project.id )} classsName="font-medium text-red-600 dark:text-red-500 hover:underline mx-1">Delete</Link> */}
                                            <button 
                                                    onClick={() => deleteProject(project.id)} 
                                                    className="font-medium text-red-600 dark:text-red-500 hover:underline mx-1"
                                                >
                                                    Delete
                                                </button>
                                        </td>
                                    </tr>
                                    ))}
                                </tbody>
                            </table>
                            </div>
                            <Pagination links={projects.meta.links}/>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    )
};

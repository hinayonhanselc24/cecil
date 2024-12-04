import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
// import { USER_STATUS_CLASS_MAP, USER_STATUS_TEXT_MAP } from "@/constants.js";

export default function Show({auth, user}) {

    // function Counter(){
    //     const[count, setCount] = useState(0);
    // }
    
    return(
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">{'User'}</h2>
            }
            >

            <Head title={'User'} />
            {/* <pre className="text-white">{JSON.stringify(user)}</pre> */}
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <img src={user.image_path}
                            alt="" 
                            className="w-full h-64 onject-cover"
                            />
                            <div className="hover:underline text-white text-bold">
                                {/* <button
                                onClick={()=> UserRedo(user.id)} 
                                className="hover:underline text-white text-bold">Back    
                                </button> */}
                            </div>
                            <div className="grid gap-1 grid-cols-2 mt-2 " >
                                <div>
                                    <div>
                                        <b>User ID</b>
                                        <p>{user.id}</p>
                                    </div>
                                    {/* <div className="text-nowrap mt-4"> */}
                                    <div className="mt-4">
                                        <b>User Name</b>
                                        <p>{user.name}</p>
                                    </div>
                                    <div className="mt-4" style={{fontWeight: 'bold'}}>User Status
                                        <div>
                                            <span className={"px-2 p-y rounded text-white "  + USER_STATUS_CLASS_MAP[user.status]}>
                                            {USER_STATUS_TEXT_MAP[user.status]}
                                            </span>
                                        </div>
                                    </div>        
                                    <div className="text-nowrap mt-4">
                                        <b>Created By</b>
                                        <p style={{fontWeight: 'normal'}}>{user.createdBy.name}</p>
                                        {/* <pre className="overflow-auto">{JSON.stringify(user)}</pre> */}
                                    </div>
                                    
                                </div>
                                <div>
                                    <div className="text-nowrap mt-4">
                                        <b>Due Date</b>
                                        <p style={{fontWeight: 'normal'}}>{user.due_date}</p>
                                        {/* <pre className="overflow-auto">{JSON.stringify(user)}</pre> */}
                                    </div>
                                    <div className="text-nowrap mt-4">
                                        <b>Created Date</b>
                                        <p style={{fontWeight: 'normal'}}>{user.created_at}</p>
                                        {/* <pre className="overflow-auto">{JSON.stringify(user)}</pre> */}
                                    </div>
                                    <div className="text-nowrap mt-4">
                                        <b>Updated By</b>
                                        <p style={{fontWeight: 'normal'}}>{user.updatedBy.name}</p>
                                        {/* <pre className="overflow-auto">{JSON.stringify(user)}</pre> */}
                                    </div>
                                </div>
                            </div>
                                <div className="mt-4">
                                    <b>User Description</b>
                                    <p style={{fontWeight: 'normal'}}>{user.description}</p>
                                    {/* <pre className="overflow-auto">{JSON.stringify(user)}</pre> */}
                                </div>
                                <div>
                                    <Link className="mt-4 px-2 p-y rounded bg-blue-400 inline-block mr-2" href={route('user.index', user.id)}>Back</Link>
                                    {/* <Link className="mt-4 px-2 p-y rounded bg-red-400 inline-block" href={route('user.edit', user.id)}>Edit</Link> */}
                                </div>



                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    )
                                // <div>
                                //     <p>You click the button {count} times! </p>
                                //     <button  className="mt-4 px-2 p-y rounded bg-blue-400 inline-block mr-2" onClick={() => setCount(count+1)}>
                                //         Click me!
                                //     </button>
                                // </div>
}
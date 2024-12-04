<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Http\Requests\StoreUserRequest;
use App\Http\Requests\UpdateUserRequest;
use App\Http\Resources\UserResource;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $query = User::query(); # this line is to define a query


        $sortField = request("sort_field", 'created_at');
        $sortDirection = request("sort_direction", 'desc');

        #this block of code will be executed as part of the search using projectName and Status 
        if (request('name')) {
            $query->where('name', 'like', '%' . request('name') . '%');
        }
        if (request('status')) {
            $query->where('status', request('status'));
        }
        $users = $query->orderBy($sortField, $sortDirection)->paginate(10);  # this line is to display a list of users and adjust the paginations


        return inertia('User/Index', [
            "users" => UserResource::collection($users),
            "queryParams" => request()->query() ?: null,
            'success' => session('success'),
        ]); #this line of code is to display the users/index.jsx file  
    }


    // public function authenticatedLayout()
    // {
    //     return inertia('Layouts/AuthenticatedLayout', [
    //         'users' => UserResource::collection(),
    //     ]);
    // }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('User/Create', []);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreUserRequest $request)
    {
        $data = $request->validated();


        // dd($data);

        /**
         * @var \Illuminate\Http\UploadedFile $image
         */

        $image = $data['image'] ?? null;
        $data['created_by'] = Auth::id();
        $data['updated_by'] = Auth::id();
        $data['password'] = Hash::make($request->password);
        if ($image) {
            $data['image_path'] = $image->store('user/' . Str::random(), 'public');
        }

        User::create($data);

        return to_route('user.index')->with('success', 'User created successfully!');
    }

    /**
     * Display the specified resource.
     */
    public function show(User $user)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(User $user)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateUserRequest $request, User $user)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user)
    {
        //
    }
}

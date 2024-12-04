<?php

namespace App\Http\Controllers;

use App\Models\Task;
use App\Http\Requests\StoreTaskRequest;
use App\Http\Requests\UpdateTaskRequest;
use App\Http\Resources\TaskResource;

class TaskController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $query = Task::query(); # this line is to define a query


        $sortField = request("sort_field", 'created_at');
        $sortDirection = request("sort_direction", 'desc');

        #this block of code will be executed as part of the search using taskName and Status 
        if (request('name')) {
            $query->where('name', 'like', '%' . request('name') . '%');
        }
        if (request('status')) {
            $query->where('status', request('status'));
        }
        $task = $query->orderBy($sortField, $sortDirection)->paginate(10);  # this line is to display a list of tasks and adjust the paginations


        return inertia('Task/Index', [
            "task" => TaskResource::collection($task),
            "queryParams" => request()->query() ?: null,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('Task/Create', []);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreTaskRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Task $task)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Task $task)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateTaskRequest $request, Task $task)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Task $task)
    {
        Task::destroy($task->id);
        return redirect()->back()->with('success', "Task deleted successfully");
    }
}

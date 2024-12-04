<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Project;
use App\Http\Resources\ProjectResource;
use App\Http\Requests\StoreProjectRequest;
use App\Http\Requests\UpdateProjectRequest;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;

class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $query = Project::query(); # this line is to define a query


        $sortField = request("sort_field", 'created_at');
        $sortDirection = request("sort_direction", 'desc');

        #this block of code will be executed as part of the search using projectName and Status 
        if (request('name')) {
            $query->where('name', 'like', '%' . request('name') . '%');
        }
        if (request('status')) {
            $query->where('status', request('status'));
        }
        $projects = $query->orderBy($sortField, $sortDirection)->paginate(10);  # this line is to display a list of projects and adjust the paginations


        return inertia('Project/Index', [
            "projects" => ProjectResource::collection($projects),
            "queryParams" => request()->query() ?: null,
            'success' => session('success'),
        ]); #this line of code is to display the projects/index.jsx file  
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('Project/Create', [],);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreProjectRequest $request, Project $project)
    {

        $data = $request->validated();
        // dd($data);
        /** 
         * @var \Illuminate\Http\UploadedFile $image
         */

        $image = $data['image'] ?? null;
        $data['created_by'] = Auth::id();
        $data['updated_by'] = Auth::id();
        if ($image) {
            $data['image_path'] = $image->store('project/' . Str::random(), 'public');
        }
        Project::create($data);

        $name = $project->name;

        return to_route('project.index')->with('success', "Project \"$name\" was created successfully!");
    }

    /**
     * Display the specified resource.
     */
    public function show(Project $project)
    {
        return inertia('Project/Show', [
            'project' => new ProjectResource($project),
        ]); #this line of code is to display
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Project $project)
    {

        return inertia('Project/Edit', [
            'project' => new ProjectResource($project),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateProjectRequest $request, Project $project)
    {
        $data = $request->validated();
        // dd($data);
        $name = $project->name;
        $image = $data['image'] ?? null;
        $data['updated_by'] = Auth::id();
        if ($image) {
            if ($project->image_path) {
                Storage::disk('public')->deleteDirectory(dirname($project->image_path));
            }
            $data['image_path'] = $image->store('project/' . Str::random(), 'public');
        }
        $project->update($data);
        return to_route('project.index')->with('success', "Project \"$name\" was updated successfully!");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Project $project)
    {
        // Project::destroy($project->id);
        // return  redirect()->back()->with('success', 'Project deleted successfully');

        $name = $project->name;
        $project->delete();
        if ($project->image_path) {
            Storage::disk('public')->deleteDirectory(dirname($project->image_path));
        }

        return to_route('project.index')->with('success', "Project \"$name\" deleted successfully");
    }
}

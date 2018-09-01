<?php

namespace Jiri\Http\Controllers;

use Jiri\Project;
use Illuminate\Http\Request;
use Validator;

class ProjectController extends Controller
{
	/**
	 * Display a listing of the resource
	 *
	 * @return \Illuminate\Http\Response
	 */
	public function index()
	{
		return response(Project::all(), 200);
	}

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
	    $validator = Validator::make($request->all(), [
		    'name' => 'required',
		    'bloc' => 'required|in:2,3',
		    'description' => 'required|string|min:20|max:200',
	    ]);
	
	    if ($validator->fails()) {
		    return response($validator->errors(), 304);
	    }
	
	    $project = new Project();
	    $project->name = $request->name;
	    $project->bloc = $request->bloc;
	    $project->description = $request->description;
	    $project->save();
	    return response($project, 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Jiri\Project  $project
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
	    $validator = Validator::make($request->all(), [
		    'name' => 'required',
		    'bloc' => 'required|in:2,3',
		    'description' => 'required|string|min:20|max:200',
	    ]);
	
	    if ($validator->fails()) {
		    return response('Data validation error : ' . $validator->errors(), 304);
	    }
	
	    $project = Project::findOrFail($id);
	    $project->name = $request->name;
	    $project->bloc = $request->bloc;
	    $project->description = $request->description;
	    $project->save();
	    return response('Project ' . $project->name . ' updated in the database', 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \Jiri\Project  $project
     * @return \Illuminate\Http\Response
     */
    public function destroy(Project $project)
    {
        //
    }
}

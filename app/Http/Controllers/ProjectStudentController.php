<?php

namespace Jiri\Http\Controllers;

use Jiri\Project_student;
use Illuminate\Http\Request;
use Jiri\Student;
use Validator;

class ProjectStudentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, $studentId)
    {
	    $validator = Validator::make($request->all(), [
		    'project_id' => 'required',
		    'site_url' => 'required|string',
		    'github_url' => 'required|string',
		    'is_available' => 'required|boolean',
	    ]);
	
	    if ($validator->fails()) {
		    return response($validator->errors(), 304);
	    }
    	
    	$project_student = new Project_student();
	    $project_student->student_id = $studentId;
	    $project_student->project_id = $request->project_id;
	    $project_student->site_url = $request->site_url;
	    $project_student->site_account = $request->site_account;
	    $project_student->site_password = $request->site_password;
	    $project_student->github_url = $request->github_url;
	    $project_student->is_available = $request->is_available;
	    $project_student->save();
	    
	    $project_student_id = $project_student->id;
	    
	    
	    $student = Student::with( 'projects')->findOrFail( $studentId );
	    
	    $response = $student->projects()->where('project_student.id', $project_student_id)->first();
	
	    return response($response, 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Jiri\Project_student  $project_student
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $studentId)
    {
	    $validator = Validator::make($request->all(), [
		    'id' => 'required|int',
		    'project_id' => 'required',
		    'site_url' => 'required|string',
		    'github_url' => 'required|string',
		    'is_available' => 'required|boolean',
	    ]);
	
	    if ($validator->fails()) {
		    return response($validator->errors(), 304);
	    }
    	
	    $project_student = Project_student::findOrFail( $request->id );
	
	    $project_student->project_id = $request->project_id;
	    $project_student->site_url = $request->site_url;
	    $project_student->site_account = $request->site_account;
	    $project_student->site_password = $request->site_password;
	    $project_student->github_url = $request->github_url;
	    $project_student->is_available = $request->is_available;
	    $project_student->save();
	
	    $project_student_id = $project_student->id;
	
	    $student = Student::with( 'projects')->findOrFail( $studentId );
	
	    $response = $student->projects()->where('project_student.id', $project_student_id)->first();
	
	    return response($response, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \Jiri\Project_student  $project_student
     * @return \Illuminate\Http\Response
     */
    public function destroy(Project_student $project_student)
    {
        //
    }
}

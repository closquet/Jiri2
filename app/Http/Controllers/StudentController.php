<?php

namespace Jiri\Http\Controllers;

use Jiri\Student;
use Illuminate\Http\Request;
use Validator;

class StudentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
	    return response(Student::all(), 200);
    }
	
	/**
	 * Disable the specified resource.
	 *
	 * @param  int  $id
	 * @return \Illuminate\Http\Response
	 */
	public function disable($id)
	{
		$student = Student::findOrFail($id);
		$student->is_available = 0;
		$student->save();
		return response('student ' . $student->name . ' disabled in the database', 200);
	}
	
	/**
	 * Enable the specified resource.
	 *
	 * @param  int  $id
	 * @return \Illuminate\Http\Response
	 */
	public function enable($id)
	{
		$student = Student::findOrFail($id);
		$student->is_available = 1;
		$student->save();
		return response('student ' . $student->name . ' enabled in the database', 200);
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
		    'email' => 'required|email|unique:students,email',
		    'phone' => 'nullable',
		    'bloc' => 'required|in:2,3',
		    'is_available' => 'required|boolean',
	    ]);
	
	    if ($validator->fails()) {
		    return response($validator->errors(), 304);
	    }
	
	    $student = new Student();
	    $student->name = $request->name;
	    $student->email = $request->email;
	    $student->phone = $request->phone;
	    $student->bloc = $request->bloc;
	    $student->is_available = $request->is_available;
	    $student->save();
	    return response($student, 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Jiri\Student  $student
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
	    $validator = Validator::make($request->all(), [
		    'name' => 'required',
		    'email' => 'required|email|unique:users,email,'.$id,
		    'phone' => 'nullable',
		    'bloc' => 'required|in:2,3',
		    'is_available' => 'required|boolean',
	    ]);
	
	    if ($validator->fails()) {
		    return response('Data validation error : ' . $validator->errors(), 304);
	    }
	
	    $student = Student::findOrFail($id);
	    $student->name = $request->name;
	    $student->email = $request->email;
	    $student->phone = $request->phone;
	    $student->bloc = $request->bloc;
	    $student->is_available = $request->is_available;
	    $student->save();
	    return response('user ' . $student->name . ' updated in the database', 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \Jiri\Student  $student
     * @return \Illuminate\Http\Response
     */
    public function destroy(Student $student)
    {
        //
    }
}

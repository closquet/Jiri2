<?php

namespace Jiri\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Jiri\User;
use Validator;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        return response(User::all());
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Disable the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function disable($id)
    {
    	$user = User::findOrFail($id);
    	$user->is_available = 0;
    	$user->save();
        return response('user ' . $user->name . ' disabled in the database', 200);
    }

    /**
     * Enable the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function enable($id)
    {
    	$user = User::findOrFail($id);
    	$user->is_available = 1;
    	$user->save();
        return response('user ' . $user->name . ' enabled in the database', 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
	    $validator = Validator::make($request->all(), [
		    'name' => 'required|max:20',
		    'email' => 'required|email',
		    'phone' => 'nullable',
		    'category' => 'required|in:0,1,2',
		    'password' => 'required_if:password_confirmation,nullable',
		    'password_confirmation' => 'required_if:password,nullable|same:password',
		    'is_available' => 'required|boolean',
		    'is_admin' => 'required|boolean',
	    ]);
	
	    if ($validator->fails()) {
	    	return response($validator->errors(), 304);
	    }
	    
	    $user = User::findOrFail($id);
	    $user->name = $request->name;
	    $user->email = $request->email;
	    $user->phone = $request->phone;
	    $user->category = $request->category;
	    
	    if( $request->password != null && $request->password != '' ){
	    	if($request->password !== $request->password_confirmation){
	    		return response('passwords didn\'t match', 304);
	    	}
	    	if(strlen( $request->password) < 6){
	    		return response('minimum 6 characters for password', 304);
	    	}
		    $user->password = Hash::make($request->password);
	    }
	    
	    $user->is_available = $request->is_available;
	    $user->is_admin = $request->is_admin;
	    $user->save();
	    return response('user ' . $user->name . ' updated in the database', 200);
    }
	
	/**
	 * Store a newly created resource in storage.
	 *
	 * @param  \Illuminate\Http\Request  $request
	 * @return \Illuminate\Http\Response
	 */
	public function store(Request $request)
	{
		$user = new User();
		$user->name = $request->name;
		$user->email = $request->email;
		$user->phone = $request->phone;
		$user->category = $request->category;
		$user->is_available = $request->is_available;
		$user->is_admin = $request->is_admin;
		$user->save();
		return response('user ' . $user->name . ' saved in the database', 200);
	}

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}

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
        return response(User::all(), 200);
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
        return response($user->id . ' enabled in the database', 200);
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
		    'name' => 'required',
		    'email' => 'required|email|unique:users,email,'.$id,
		    'phone' => 'nullable',
		    'category' => 'required|in:1,2,3',
		    'password' => 'required_if:password_confirmation,nullable',
		    'password_confirmation' => 'required_if:password,nullable|same:password',
		    'is_available' => 'required|boolean',
		    'is_admin' => 'required|boolean',
	    ]);
	
	    if ($validator->fails()) {
	    	return response('Data validation error : ' . $validator->errors(), 304);
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
		$validator = Validator::make($request->all(), [
			'name' => 'required|',
			'email' => 'required|email|unique:users,email',
			'phone' => 'nullable',
			'category' => 'required|in:1,2,3',
			'password' => 'required|confirmed|min:6',
			'is_available' => 'required|boolean',
			'is_admin' => 'required|boolean',
		]);
		
		if ($validator->fails()) {
			return response($validator->errors(), 304);
		}
		
		$user = new User();
		$user->name = $request->name;
		$user->email = $request->email;
		$user->phone = $request->phone;
		$user->category = $request->category;
		$user->password = Hash::make($request->password);
		$user->is_available = $request->is_available;
		$user->is_admin = $request->is_admin;
		$user->save();
		return response($user, 200);
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

<?php

namespace Jiri\Http\Controllers;

use Illuminate\Http\Request;
use Jiri\User;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
//        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
	    $user = auth()->user()->toArray();
        return view('home', [ 'user' => $user ]);
    }
}

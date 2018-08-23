<?php

namespace Jiri\Http\Controllers;

use Illuminate\Http\Request;

class SessionController extends Controller
{
	public function refresh(Request $request)
	{
		$request->session()->regenerate();
	}
}

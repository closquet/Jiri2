<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Auth::routes();
Route::get('/register', function () {return redirect('/home');})->name('register');
Route::get('/logout', 'AuthController@logout')->name('logout');


Route::group( [ 'middleware' => 'auth' ], function (){
	
	Route::get('/', 'HomeController@index')->name('home');
	Route::get('/home', 'HomeController@index')->name('home');
	Route::get('/refresh', 'SessionController@refresh')->name('refresh');
	
});

Route::group( [ 'middleware' => 'admin' ], function (){
	
	Route::get('/users', 'UserController@index')->name('users-index');
//	Route::get('/user', 'HomeController@index')->name('home');
	
});



Route::fallback(function () {return redirect('/home');});
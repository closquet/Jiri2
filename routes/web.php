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
	
	Route::get('/', function () {return redirect('/home');})->name('root');
	Route::get('/home', 'HomeController@index')->name('home');
	Route::get('/refresh', 'SessionController@refresh')->name('refresh');
	
});

Route::group( [ 'middleware' => 'admin' ], function (){
	
	Route::get('/users', 'UserController@index')->name('users/index');
	Route::post('/users/{userId}/disable', 'UserController@disable')->name('users/disable');
	Route::post('/users/{userId}/enable', 'UserController@enable')->name('users/enable');
	Route::post('/users/{userId}/update', 'UserController@update')->name('users/update');
	Route::post('/users/store', 'UserController@store')->name('users/store');
	
	Route::get('/students', 'StudentController@index')->name('students/index');
	Route::post('/students/{studentId}/disable', 'StudentController@disable')->name('students/disable');
	Route::post('/students/{studentId}/enable', 'StudentController@enable')->name('students/enable');
	Route::post('/students/{studentId}/update', 'StudentController@update')->name('students/update');
	Route::post('/students/store', 'StudentController@store')->name('students/store');
	
	Route::get('/projects', 'ProjectController@index')->name('projects/index');
	Route::post('/projects/{projectId}/update', 'ProjectController@update')->name('projects/update');
	Route::post('/projects/store', 'ProjectController@store')->name('projects/store');
	
});



Route::fallback(function () {return redirect('/home');});
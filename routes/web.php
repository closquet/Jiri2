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
	
	Route::get('/users', 'UserController@index')->name('user/index');
	Route::post('/users/{userId}/disable', 'UserController@disable')->name('user/disable');
	Route::post('/users/{userId}/enable', 'UserController@enable')->name('user/enable');
	Route::post('/users/{userId}/update', 'UserController@update')->name('user/update');
	Route::post('/users/store', 'UserController@store')->name('users/store');
	
	Route::get('/students', 'StudentController@index')->name('student/index');
	Route::post('/students/{studentId}/disable', 'StudentController@disable')->name('student/disable');
	Route::post('/students/{studentId}/enable', 'StudentController@enable')->name('student/enable');
	Route::post('/students/{studentId}/update', 'StudentController@update')->name('student/update');
	Route::post('/students/store', 'StudentController@store')->name('student/store');
	
	Route::get('/projects', 'ProjectController@index')->name('project/index');
	Route::post('/projects/{projectId}/update', 'ProjectController@update')->name('project/update');
	Route::post('/projects/store', 'ProjectController@store')->name('project/store');
	
	Route::post('/students/{studentId}/projects/store', 'ProjectStudentController@store')->name('studentProject/store');
	Route::post('/students/{studentId}/projects/{projectId}/update', 'ProjectStudentController@update')->name('studentProject/update');
});



Route::fallback(function () {return redirect('/home');});
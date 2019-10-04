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

Route::get('/', function () {
    return view('welcome');
});

Route::get('/data-binding', function () {
    return view('data-binding');
});

Route::get('/v-for', function () {
    return view('v-for');
});

Route::get('/events', function () {
    return view('events');
});
Route::get('/more-binding', function () {
    return view('binding');
});
Route::get('/playlist', function () {
    return view('playlist');
});

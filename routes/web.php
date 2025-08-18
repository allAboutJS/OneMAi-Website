<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('index');
});
Route::get('/benefits', function () {
    return view('benefits');
});
Route::get('/contact', function () {
    return view('contact');
});
Route::get('/features', function () {
    return view('features');
});
Route::get('/privacy', function () {
    return view('privacy');
});
Route::get('/cookies', function () {
    return view('cookies');
});
Route::get('/terms', function () {
    return view('terms');
});
Route::get('/how-it-works', function () {
    return view('terms');
});

Route::get('/about', function () {
    return view('about');
});

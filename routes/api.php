<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\UserController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/register', [UserController::class, 'register']);
Route::post('/login', [UserController::class, 'login']);
Route::post('/user/update', [UserController::class, 'update']);
Route::delete('/user/{id}', [UserController::class, 'destroy']);
Route::get('/members', [UserController::class, 'index']);
Route::get('/user/bureau', [UserController::class, 'bureau']);
Route::get('/bureau/{year}', [App\Http\Controllers\BureauController::class, 'index']);

Route::get('/event', [App\Http\Controllers\EventController::class, 'index']);
Route::post('/event/add', [App\Http\Controllers\EventController::class, 'store']);
Route::post('/event/update/{id}', [App\Http\Controllers\EventController::class, 'update']);
Route::delete('/event/{id}', [App\Http\Controllers\EventController::class, 'destroy']);

Route::get('/articles', [App\Http\Controllers\ArticleController::class, 'index']);
Route::post('/article/add', [App\Http\Controllers\ArticleController::class, 'create']);
Route::post('/article/update/{id}', [App\Http\Controllers\ArticleController::class, 'update']);
Route::delete('/article/{id}', [App\Http\Controllers\ArticleController::class, 'destroy']);

Route::get('/archive', [App\Http\Controllers\DocumentController::class, 'index']);
Route::post('/archive', [App\Http\Controllers\DocumentController::class, 'search']);
Route::post('/archive/add', [App\Http\Controllers\DocumentController::class, 'create']);
Route::delete('/archive/{id}', [App\Http\Controllers\DocumentController::class, 'destroy']);



Route::get('/uses', [App\Http\Controllers\UsesController::class, 'index']);
Route::get('/seeuses', [App\Http\Controllers\UsesController::class, 'show']);


Route::get('/home', [App\Http\Controllers\HomeController::class, 'index']);


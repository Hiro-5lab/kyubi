<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\HitsController;
use App\Http\Controllers\ViewController;
use App\Http\Controllers\RecordController;

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

/**
 * post function
 */
Route::group(["middleware" => ["auth"]], function () {

    Route::get("/posts", [PostController::class, "index"]);
    Route::get("/posts/create", [PostController::class, "create"]);
    Route::get("/posts/{post}", [PostController::class, "show"]);
    Route::post("/posts", [PostController::class, "store"]);
    Route::get('/posts/{post}/edit', [PostController::class, "edit"]);
    Route::put('/posts/{post}', [PostController::class, "update"]);
    Route::delete("/posts/{post}", [PostController::class, "delete"]);
});

/**
 * hits function
 */
Route::group(["middleware" => ["auth"]], function () {

    Route::get("/hits", [HitsController::class, "index"]);
    Route::get("/hits/create", [HitsController::class, "create"]);
    Route::get("/hits/{hit}", [HitsController::class, "show"]);
    Route::post("/hits", [HitsController::class, "store"]);
    Route::get('/hits/{hit}/edit', [HitsController::class, "edit"]);
    Route::put('/hits/{hit}', [HitsController::class, "update"]);
    Route::delete("/hits/{hit}", [HitsController::class, "delete"]);
});

/**
 * view function
 */
Route::group(["middleware" => ["auth"]], function () {

    Route::get("/View", [ViewController::class, "index"]);
    Route::get("/View", [RecordController::class, "index"]);
});

/**
 * first setting
 */
Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';

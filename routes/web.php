<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\HitsController;
use App\Http\Controllers\ViewController;
use App\Http\Controllers\RecordController;
use App\Http\Controllers\FeedbackController;

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
 * hits function
 */
Route::group(["middleware" => ["auth"]], function () {

    Route::get("/View", [HitsController::class, "index"]);
    Route::get("/View/create", [HitsController::class, "create"]);
});

/**
 * view function
 */
Route::group(["middleware" => ["auth"]], function () {

    Route::get("/View", [ViewController::class, "index"]);
});

/**
 * Feedback function
 */
Route::group(["middleware" => ["auth"]], function () {

    Route::post('/View/{record}', [FeedbackController::class, "feedback"]);
    Route::get("/View", [FeedbackController::class, "index"]);
});

/**
 * Record function
 */
Route::group(["middleware" => ["auth"]], function () {

    Route::get("/View", [RecordController::class, "index"]);
    Route::get("/View/create", [RecordController::class, "create"]);
    Route::get("/View/{record}", [RecordController::class, "show"]);
    Route::post("/View", [RecordController::class, "store"]);
    Route::get('/View/{record}/edit', [RecordController::class, "edit"]);
    Route::put('/View/{record}', [RecordController::class, "update"]);
    Route::delete("/View/{record}", [RecordController::class, "delete"]);
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

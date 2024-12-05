<?php

use App\Http\Controllers\IncomeOutController;
use App\Http\Controllers\ProfileController;
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

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::get('/', function () {
    return Inertia::render('Landing/Landingpage', [
        'myNavbar' => [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
        ],
        'title'=> 'Welcome Kelompok 04',
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/dashboard/savings', function () {  
    return Inertia::render('SavingsPage');
})->middleware(['auth', 'verified'])->name('savings');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('api/trans', [IncomeOutController::class, 'apIndex']);
Route::delete('api/trans/{income}', [IncomeOutController::class,'destroy'])->name('trans.destroy');


require __DIR__.'/auth.php';

<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\IncomeOutController;
use App\Http\Controllers\ProfileController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use SebastianBergmann\CodeCoverage\Report\Html\Dashboard;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::get('/trans', [IncomeOutController::class, 'index']);
Route::get('/export-excel', [IncomeOutController::class, 'exportExcel']);



Route::get('/income', [IncomeOutController::class, 'getIncome']);
//Api Income Untuk menambahkan data
Route::post('/income', [IncomeOutController::class, 'storeIncome']); 
//Api Income Untuk menampilkan 1 data 
Route::get('/income/{id}', [IncomeOutController::class, 'showIncome']);
//Api Income Untuk Update data
Route::put('/income/{id}', [IncomeOutController::class, 'updateIncome']);
// Api untuk hapus income
Route::delete('/income/{id}', [IncomeOutController::class, 'destroyIncome']);


//Api Outcome
//Api Outcome Untuk mengambil semua data
Route::get('/outcome', [IncomeOutController::class, 'getOutcome']);
//Api Outcome Untuk menambahkan data
Route::post('/outcome', [IncomeOutController::class, 'storeOutcome']);
//Api Outcome Untuk menampilkan 1 data
Route::get('/outcome/{id}', [IncomeOutController::class, 'showOutcome']);
//Api Outcome Untuk Update data
Route::put('/outcome/{id}', [IncomeOutController::class, 'updateOutcome']);
// Api untuk hapus outcome
Route::delete('/outcome/{id}', [IncomeOutController::class, 'destroyOutcome']);


//api untuk dashboard
Route::get('/dashboard', [DashboardController::class, 'getSummary']);

Route::get('/data/{id}', [ProfileController::class, 'getUser']);
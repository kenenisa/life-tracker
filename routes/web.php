<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\FinanceController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\FitnessController;
use App\Http\Controllers\WorkoutController;
use App\Http\Controllers\DietController;
use App\Http\Controllers\SleepController;
use App\Http\Controllers\BiometricController;
use App\Http\Controllers\MealController;

Route::get('/', function () {
    return redirect('/finances');
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});




Route::get('/dashboard', function () {
    return redirect('/finances');
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::middleware(['auth'])->group(function () {
    Route::resource('finances', FinanceController::class);
    Route::resource('categories', CategoryController::class);
    Route::resource('fitnesses', FitnessController::class);
    Route::resource('workouts', WorkoutController::class);
    Route::resource('diets', DietController::class);
    Route::resource('sleeps', SleepController::class);
    Route::resource('biometrics', BiometricController::class);
    Route::resource('meals', MealController::class);
});


require __DIR__.'/auth.php';

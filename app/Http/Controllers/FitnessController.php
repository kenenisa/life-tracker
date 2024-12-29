<?php

namespace App\Http\Controllers;

use App\Models\Fitness;
use Illuminate\Http\Request;

class FitnessController extends BaseController
{
    /**
     * Define the model, view path, route name, and validation rules for Fitness.
     */
    protected $model = Fitness::class; // The Eloquent model
    protected $viewPath = 'Fitnesses';  // React components folder for this resource
    protected $routeName = 'fitnesses'; // Base route name for the resource
    protected $rules = [
        'user_id' => 'required|exists:users,id',
        'workout_id' => 'required|exists:workouts,id',
        'biometric_id' => 'required|exists:biometrics,id',
    ];

    /**
     * Override the store method to associate the fitness entry with the authenticated user.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(Request $request): \Illuminate\Http\RedirectResponse
    {
        $validated = $request->validate($this->rules);

        // Automatically associate the record with the authenticated user's ID
        $validated['user_id'] = request()->user()->id;

        $this->model::create($validated);

        return redirect()->route("{$this->routeName}.index")->with('success', 'Fitness entry created successfully!');
    }

    /**
     * Optionally, override other methods if you need to customize behavior.
     */
}

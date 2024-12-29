<?php

namespace App\Http\Controllers;

use App\Models\Workout;
use Illuminate\Http\Request;

class WorkoutController extends BaseController
{
    /**
     * Define the model, view path, route name, and validation rules for Workout.
     */
    protected $model = Workout::class; // The Eloquent model
    protected $viewPath = 'Workouts';  // React components folder for this resource
    protected $routeName = 'workouts'; // Base route name for the resource
    protected $rules = [
        'name' => 'required|string|max:255',
        'description' => 'nullable|string',
        'user_id' => 'required|exists:users,id',
        'weight' => 'required|numeric|min:0',
        'duration' => 'required|integer|min:1',
        'calories' => 'required|numeric|min:0',
    ];

    /**
     * Override the store method to associate the workout entry with the authenticated user.
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

        return redirect()->route("{$this->routeName}.index")->with('success', 'Workout created successfully!');
    }

    /**
     * Optionally, override other methods if you need to customize behavior.
     */
}

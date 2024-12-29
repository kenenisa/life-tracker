<?php

namespace App\Http\Controllers;

use App\Models\Meal;
use Illuminate\Http\Request;

class MealController extends BaseController
{
    /**
     * Define the model, view path, route name, and validation rules for Meal.
     */
    protected $model = Meal::class; // The Eloquent model
    protected $viewPath = 'Meals';  // React components folder for this resource
    protected $routeName = 'meals'; // Base route name for the resource
    protected $rules = [
        'name' => 'required|string|max:255',
        'description' => 'nullable|string',
        'calories' => 'required|numeric|min:0',
        'user_id' => 'required|exists:users,id',
    ];

    /**
     * Override the store method to associate the meal entry with the authenticated user.
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

        return redirect()->route("{$this->routeName}.index")->with('success', 'Meal created successfully!');
    }

    /**
     * Optionally, override other methods if you need to customize behavior.
     */
}

<?php

namespace App\Http\Controllers;

use App\Models\Diet;
use Illuminate\Http\Request;

class DietController extends BaseController
{
    /**
     * Define the model, view path, route name, and validation rules for Diet.
     */
    protected $model = Diet::class; // The Eloquent model
    protected $viewPath = 'Diets';  // React components folder for this resource
    protected $routeName = 'diets'; // Base route name for the resource
    protected $rules = [
        'calories' => 'required|numeric|min:0',
        'biometric_id' => 'required|exists:biometrics,id',
        'description' => 'nullable|string',
        'user_id' => 'required|exists:users,id',
    ];

    /**
     * Override the store method to associate the diet entry with the authenticated user.
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

        return redirect()->route("{$this->routeName}.index")->with('success', 'Diet created successfully!');
    }

    /**
     * Optionally, override other methods if you need to customize behavior.
     */
}

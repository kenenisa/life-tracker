<?php

namespace App\Http\Controllers;

use App\Models\Sleep;
use Illuminate\Http\Request;

class SleepController extends BaseController
{
    /**
     * Define the model, view path, route name, and validation rules for Sleep.
     */
    protected $model = Sleep::class; // The Eloquent model
    protected $viewPath = 'Sleeps';  // React components folder for this resource
    protected $routeName = 'sleeps'; // Base route name for the resource
    protected $rules = [
        'start' => 'required|date',
        'end' => 'required|date|after:start',
        'biometric_id' => 'required|exists:biometrics,id',
        'user_id' => 'required|exists:users,id',
    ];

    /**
     * Override the store method to associate the sleep entry with the authenticated user.
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

        return redirect()->route("{$this->routeName}.index")->with('success', 'Sleep record created successfully!');
    }

    /**
     * Optionally, override other methods if you need to customize behavior.
     */
}

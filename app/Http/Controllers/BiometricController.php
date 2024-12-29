<?php

namespace App\Http\Controllers;

use App\Models\Biometric;
use Illuminate\Http\Request;

class BiometricController extends BaseController
{
    /**
     * Define the model, view path, route name, and validation rules for Biometric.
     */
    protected $model = Biometric::class; // The Eloquent model
    protected $viewPath = 'Biometrics';  // React components folder for this resource
    protected $routeName = 'biometrics'; // Base route name for the resource
    protected $rules = [
        'user_id' => 'required|exists:users,id',
        'weight' => 'required|numeric|min:0',
        'height' => 'required|numeric|min:0',
    ];

    /**
     * Override the store method to associate the biometric entry with the authenticated user.
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

        return redirect()->route("{$this->routeName}.index")->with('success', 'Biometric data created successfully!');
    }

    /**
     * Optionally, override other methods if you need to customize behavior.
     */
}

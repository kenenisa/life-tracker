<?php

namespace App\Http\Controllers;

use App\Models\Fitness;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

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
     * Display a listing of the resource with relationships.
     *
     * @return Response
     */
    public function index(): Response
    {
        $fitnesses = $this->model::with(['user', 'workout', 'biometric'])->get(); // Eager load relationships

        return Inertia::render("{$this->viewPath}/Index", [
            'data' => $fitnesses,
        ]);
    }

    /**
     * Display the specified resource with relationships.
     *
     * @param int $id
     * @return Response
     */
    public function show(int $id): Response
    {
        $fitness = $this->model::with(['user', 'workout', 'biometric'])->findOrFail($id); // Load related data

        return Inertia::render("{$this->viewPath}/Show", [
            'data' => $fitness,
        ]);
    }
    /**
     * Optionally, override other methods if you need to customize behavior.
     */
}

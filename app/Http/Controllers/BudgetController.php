<?php

namespace App\Http\Controllers;

use App\Models\Budget;
use Illuminate\Http\Request;

class BudgetController extends BaseController
{
    /**
     * Define the model, view path, route name, and validation rules for Budget.
     */
    protected $model = Budget::class; // The Eloquent model
    protected $viewPath = 'Budgets';  // React components folder for this resource
    protected $routeName = 'budgets'; // Base route name for the resource
    protected $rules = [
        'amount' => 'required|numeric|min:0',
        'category_id' => 'required|exists:categories,id',
        'user_id' => 'required|exists:users,id',
    ];

    /**
     * Override the store method to associate the budget entry with the authenticated user.
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

        return redirect()->route("{$this->routeName}.index")->with('success', 'Budget created successfully!');
    }

    /**
     * Optionally, override other methods if you need to customize behavior.
     */
}

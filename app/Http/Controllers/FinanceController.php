<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Finance;

class FinanceController extends BaseController
{
    /**
     * Define the model, view path, route name, and validation rules for Finance.
     */
    protected $model = Finance::class; // The Eloquent model
    protected $viewPath = 'Finances';  // React components folder for this resource
    protected $routeName = 'finances'; // Base route name for the resource
    protected $rules = [
        'income' => 'required|numeric|min:0',
        'expense' => 'required|numeric|min:0',
        'category_id' => 'required|exists:categories,id',
        'user_id' => 'required|exists:users,id',
    ];

    /**
     * Override the store method to associate the finance entry with the authenticated user.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(Request $request): \Illuminate\Http\RedirectResponse
    {
        $validated = $request->validate($this->rules);

        // Automatically associate the record with the authenticated user
        $validated['user_id'] = request()->user()->id;
        $this->model::create($validated);

        return redirect()->route("{$this->routeName}.index")->with('success', 'Finance record created successfully!');
    }

    /**
     * Optionally, override other methods if you need to customize behavior.
     */
}

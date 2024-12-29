<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends BaseController
{
    /**
     * Define the model, view path, route name, and validation rules for Category.
     */
    protected $model = Category::class; // The Eloquent model
    protected $viewPath = 'Categories';  // React components folder for this resource
    protected $routeName = 'categories'; // Base route name for the resource
    protected $rules = [
        'name' => 'required|string|max:255',
        'user_id' => 'required|exists:users,id',
        'description' => 'nullable|string',
    ];

    /**
     * Override the store method to associate the category entry with the authenticated user.
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

        return redirect()->route("{$this->routeName}.index")->with('success', 'Category created successfully!');
    }

    /**
     * Optionally, override other methods if you need to customize behavior.
     */
}

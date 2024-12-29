<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Response;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;

/**
 * Class BaseController
 * @package App\Http\Controllers
 */
abstract class BaseController extends Controller
{
    protected $model;
    protected $viewPath;
    protected $routeName;
    protected $rules = [];

    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index(): Response
    {
        $data = $this->model::all();
        return Inertia::render("{$this->viewPath}/Index", [
            'data' => $data,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function create(): Response
    {
        return Inertia::render("{$this->viewPath}/Create");
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @return RedirectResponse
     */
    public function store(Request $request): RedirectResponse
    {
        $validated = $request->validate($this->rules);
        $this->model::create($validated);
        return redirect()->route("{$this->routeName}.index")->with('success', 'Created successfully!');
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return Response
     */
    public function show(int $id): Response
    {
        $data = $this->model::findOrFail($id);
        return Inertia::render("{$this->viewPath}/Show", [
            'data' => $data,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param int $id
     * @return Response
     */
    public function edit(int $id): Response
    {
        $data = $this->model::findOrFail($id);
        return Inertia::render("{$this->viewPath}/Edit", [
            'data' => $data,
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param int $id
     * @return RedirectResponse
     */
    public function update(Request $request, int $id): RedirectResponse
    {
        $validated = $request->validate($this->rules);
        $this->model::findOrFail($id)->update($validated);
        return redirect()->route("{$this->routeName}.index")->with('success', 'Updated successfully!');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return RedirectResponse
     */
    public function destroy(int $id): RedirectResponse
    {
        $this->model::findOrFail($id)->delete();
        return redirect()->route("{$this->routeName}.index")->with('success', 'Deleted successfully!');
    }
}

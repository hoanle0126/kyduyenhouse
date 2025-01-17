<?php

namespace App\Http\Controllers;

use App\Models\Design;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DesignController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Admin/DesignPage/index');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Design $design)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Design $design)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Design $design)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Design $design)
    {
        //
    }
}

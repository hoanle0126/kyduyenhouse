<?php

namespace App\Http\Controllers;

use App\Http\Resources\CategoryResource;
use App\Http\Resources\ProductResource;
use App\Models\Category;
use App\Models\Product;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Str;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Admin/ProductPage/index', [
            "products" => ProductResource::collection(Product::all())
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/ProductPage/AddPage/index', [
            "categories" => CategoryResource::collection(Category::all())
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $product = Product::create([
            'name' => $request->name,
            'key_name' => Str::slug($request->name, '-'),
            'description' => $request->description,
            'thumbnail' => $request->thumbnail,
            'category_id' => $request->category,
            'ingredient' => $request->ingredient,
            'sales' => $request->sales,
            'price' => $request->price,
            'images' => $request->images,
            'quantity' => $request->quantity
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Product $product)
    {
        return Inertia::render('Admin/ProductPage/UpdatePage/index', [
            "product" => new ProductResource($product),
            "categories" => CategoryResource::collection(Category::all())
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Product $product)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Product $product)
    {
        $product->update([
            'name' => $request->name,
            'key_name' => Str::slug($request->name, '-'),
            'description' => $request->description,
            'thumbnail' => $request->thumbnail,
            'category_id' => $request->category['id'],
            'ingredient' => $request->ingredient,
            'sales' => $request->sales,
            'price' => $request->price,
            'images' => $request->images,
            'quantity' => $request->quantity
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {
        $product->delete();
    }
}

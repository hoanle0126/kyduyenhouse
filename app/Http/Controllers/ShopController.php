<?php

namespace App\Http\Controllers;

use App\Http\Resources\CategoryResource;
use App\Http\Resources\ProductResource;
use App\Models\Category;
use App\Models\Product;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ShopController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $category = request()->get("category");
        $price = request()->get("price");
        $sort = request()->get("sort");
        $asc = request()->get("asc");
        $search = request()->get("search");
        $sort = request()->get("sort");
        $range = explode("-", $price);
        $paginate = request()->get("paginate");
        $products = Product::query();


        if ($category) {
            $products = $products->where("category_id", $category);
        }
        if ($price) {
            $products = $products->where("price", "<=", $range[1]);
            $products = $products->where("price", ">=", $range[0]);
        }
        if ($search) {
            $products = $products->where("name", "like", $search . "%");
        }
        if ($sort) {
            $products = $products->orderBy($sort, $asc || $asc == true ? "asc" : "desc");
        }

        return Inertia::render('Client/ShopPage/index', [
            "category" => $category,
            "range" => $range,
            "sort" => $sort,
            "asc" => $asc,
            "paginate" => $paginate,
            "categories" => CategoryResource::collection(Category::all()),
            "products" => ProductResource::collection($products->paginate($paginate ? $paginate : 8))
        ]);
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
    public function show($product)
    {
        return Inertia::render('Client/ShopPage/DetailPage/index', [
            "product" => new ProductResource(Product::where("key_name", $product)->first())
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
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {
        //
    }
}

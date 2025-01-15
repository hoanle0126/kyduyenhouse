<?php

use App\Http\Controllers\CartController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ReviewController;
use App\Http\Controllers\ShopController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Client/LandingPage/index');
})->name("landing");

Route::get('/admin', function () {
    return Inertia::render('Admin/DashboardPage/index');
})->name("admin.dashboard");

Route::resource("/admin/products", ProductController::class);

Route::resource('/admin/categories', CategoryController::class);

Route::get('/admin/blogs', function () {
    return Inertia::render('Admin/BlogPage/index');
})->name("admin.blogs");

Route::get('/admin/orders', function () {
    return Inertia::render('Admin/OrderPage/index');
})->name("admin.orders");

Route::get('/admin/setting', function () {
    return Inertia::render('Admin/SettingPage/index');
})->name("admin.setting");

Route::get('/admin/profile', function () {
    return Inertia::render('Admin/ProfilePage/index');
})->name("admin.profile");



// Route::get('/shop', function () {
//     $category = request()->get("category");

//     return Inertia::render('Client/ShopPage/index', [
//         "category" => $category
//     ]);
// })->name("shop");

// Route::get('/shop/detail', function () {
// })->name("shop");

Route::resource("/shop", ShopController::class);
Route::resource('/reviews', ReviewController::class);
Route::resource('/checkout', controller: CartController::class);
Route::post('/checkout/{product}', [CartController::class, "store"])->name("cart.store");

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';

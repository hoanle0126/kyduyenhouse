<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Review extends Model
{
    use HasFactory;

    protected $fillable = [
        "rating",
        "comment",
        "respond",
        "user_id",
        "product_id"
    ];
    protected $casts = [
        'respond' => 'array'
    ];

    public function Product()
    {
        return $this->belongsTo(Product::class);
    }

    public function User()
    {
        return $this->belongsTo(User::class);
    }
}

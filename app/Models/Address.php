<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Address extends Model
{
    use HasFactory;

    protected $fillable = [
        "user_id",
        "first_name",
        "last_name",
        "phone",
        "city",
        "state",
        "street_address",
        "zip",
        "default"
    ];

    public function User()
    {
        return $this->belongsTo(User::class);
    }
}

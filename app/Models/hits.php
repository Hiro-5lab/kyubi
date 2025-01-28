<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class hits extends Model
{
    use HasFactory;

    protected $fillable = [
        "hit1",
        "hit2",
        "hits",
        "sum"
    ];
}

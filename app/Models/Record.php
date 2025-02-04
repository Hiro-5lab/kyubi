<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Record extends Model
{
    use HasFactory;
    protected $fillable = [
        'title',
        'date',
        'place',
        'comment'
    ];

    public function user()
    {
        return $this->belongsTo(user::class);
    }
}

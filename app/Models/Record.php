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
        'comment',
        'hits_id'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
    public function hits()
    {
        return $this->belongsTo(hits::class);
    }
}

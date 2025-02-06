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
        "hit3",
        "hit4",
        "hit5",
        "hit6",
        "hit7",
        "hit8",
        "hit9",
        "hit10",
        "hit11",
        "hit12",
        "hit13",
        "hit14",
        "hit15",
        "hit16",
        "hit17",
        "hit18",
        "hit19",
        "hit20",
        "hits",
        "sum"
    ];

    public function record()
    {
        return $this->belongsTo(Record::class);
    }
}

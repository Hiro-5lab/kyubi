<?php

namespace App\Http\Controllers;

use App\Models\hits;
use Inertia\Inertia;
use Illuminate\Http\Request;

class HitsController extends Controller
{
    public function index(hits $hit)
    {
        return Inertia::render("Hits/Index", ["hits" => $hit->get()]);
    }
    public function show(hits $hit)
    {
        return Inertia::render("Hit/Show", ["hits" => $hit]);
    }
}

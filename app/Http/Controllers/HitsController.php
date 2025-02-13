<?php

namespace App\Http\Controllers;

use App\Models\hits;
use App\Http\Requests\HitRequest;
use Inertia\Inertia;
use Illuminate\Http\Request;

class HitsController extends Controller
{
    public function index(hits $hit)
    {
        return Inertia::render("Hits/Index", ["hits" => $hit->get()]);
    }
    public function create(hits $hit)
    {
        return Inertia::render("View/Create", ["hits" => $hit->get()]);
    }
}

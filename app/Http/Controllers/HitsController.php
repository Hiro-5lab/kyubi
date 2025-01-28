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
    public function show(hits $hit)
    {
        return Inertia::render("Hit/Show", ["hits" => $hit]);
    }
    public function create()
    {
        return Inertia::render("Hit/Create");
    }
    public function store(HitRequest $request, hits $hit)
    {
        $input = $request->all();
        $hit->fill($input)->save();
        return redirect("/hits/" . $hit->id);
    }
    public function edit(hits $hit)
    {
        return Inertia::render("Hit/Edit", ["hits" => $hit]);
    }
    public function update(HitRequest $request, hits $hit)
    {
        $input = $request->all();
        $hit->fill($input)->save();
        return redirect("/hits/" . $hit->id);
    }
    public function delete(hits $hit)
    {
        $hit->delete();
        return redirect("/hits");
    }
}

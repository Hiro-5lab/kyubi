<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Record;
use App\Models\hits;
use App\Http\Requests\RecordRequest;
use Inertia\Inertia;

class RecordController extends Controller
{
    public function index(Record $record)
    {
        return Inertia::render("View/Index", ["records" => $record->get()]);
    }
    public function show(Record $record)
    {
        return Inertia::render("View/Show", ["record" => $record]);
    }
    public function create()
    {
        return Inertia::render("View/Create");
    }
    public function store(RecordRequest $request, Record $record, Hits $hits)
    {
        $input = $request->all();
        $hits->fill($input)->save();

        $record->fill($input);
        $record->hit_id = $hits->id;
        $record->save();
        return redirect("/View/" . $record->id);
    }
    public function edit(Record $record)
    {
        return Inertia::render("View/Edit", ["record" => $record]);
    }

    public function update(RecordRequest $request, Record $record)
    {
        $input = $request->all();
        $record->fill($input)->save();
        return redirect("/View/" . $record->id);
    }
    public function delete(Record $record)
    {
        $record->delete();
        return redirect("/View");
    }
}

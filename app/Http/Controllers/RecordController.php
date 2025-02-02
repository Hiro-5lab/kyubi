<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Record;
use Inertia\Inertia;

class RecordController extends Controller
{
    public function index(Record $record)
    {
        return Inertia::render("View/Index", ["records" => $record->get()]);
    }
}

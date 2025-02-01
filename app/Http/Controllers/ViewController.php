<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class ViewController extends Controller
{
    public function index()
    {
        $user = Auth::user();
        return Inertia::render("View/Index", ["user" => $user]);
    }
}

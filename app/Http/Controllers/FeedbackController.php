<?php

namespace App\Http\Controllers;

use App\Http\Requests\FeedbackRequest;
use App\Models\feedbacks;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class FeedbackController extends Controller
{
    public function index(feedbacks $feedback)
    {
        return Inertia::render("View/Index", ["feedbacks" => $feedback->get()]);
    }
    public function feedback(FeedbackRequest $request)
    {
        $user_id = Auth::id();
        $input = $request['feedback'];
        $input += ['user_id' => $user_id];
        $feedback = new feedbacks();
        $feedback->fill($input)->save();

        return redirect("/View/" . $input['record_id']);
    }
}

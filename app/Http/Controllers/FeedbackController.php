<?php

namespace App\Http\Controllers;

use App\Http\Requests\FeedbackRequest;
use App\Models\feedbacks;
use Illuminate\Support\Facades\Auth;


class FeedbackController extends Controller
{
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

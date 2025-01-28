<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class HitRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'hit1' => 'required|string|max:100',
        ];
    }
}

<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RecordRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'title' => 'required|string|max:100',
            'date' => 'required|date',
            'place' => 'required|string|max:100',
            'hit_id' => 'required'
        ];
    }
}

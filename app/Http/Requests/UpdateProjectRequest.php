<?php

namespace App\Http\Requests;


use Illuminate\Validation\Rule;
use Illuminate\Foundation\Http\FormRequest;

class UpdateProjectRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => ['required', 'string', 'max:225'],
            // 'image' => ['required|image|mimes:jpeg,png,jpg,gif|max:2048'],
            'image' => ['required', 'image', 'mimes:jpeg,png,jpg,gif', 'max:2048'],
            'description' => ['required', 'string', 'max:225'],
            'due_date' => ['nullable', 'date'],
            'status' => ['required', Rule::in(['pending', 'in_progress', 'completed'])],
        ];
    }
}

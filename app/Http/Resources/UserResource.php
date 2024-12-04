<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            "id" => $this->id,
            "name" => $this->name,
            // "image_path" => $this->image_path,
            "image_path" => $this->image_path ?
                Storage::url($this->image_path) : null,
            "email" => $this->email,
            // "created_at" => (new Carbon($this->created_at))->format('Y-m-d'),
        ];
    }
}

<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ReviewResource extends JsonResource
{
    public function __construct($resource)
    {
        parent::__construct($resource);

        $this->withoutWrapping();
    }
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        $this->withoutWrapping();
        return [
            'user' => $this->user,
            'rating' => $this->rating,
            "comment" => $this->comment,
            "respond" => $this->respond,
            "created_at" => $this->created_at
        ];
    }
}

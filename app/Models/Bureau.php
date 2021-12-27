<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Bureau extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'year',
        'post',
        'quote',
    ];

    public function user()
    {
        return $this->hasOne(User::class);
    }

}

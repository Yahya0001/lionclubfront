<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    use HasFactory;


    protected $fillable = [
        'image',
        'article',
        'title',
        'author',
        'date',
    ];

    public function user()
    {

        return $this->belongsTo(User::class);

        
    }



}

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Bureau;
use App\Models\User;

class BureauController extends Controller
{
    //
    

    public function index($year) {
        

    
        $bureau = User::with("bureau")->whereHas('bureau', function ($query) use ($year) {
            $query->where('year','=',$year);
        })->get();

        return $bureau;
    }
}

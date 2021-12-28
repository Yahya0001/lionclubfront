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

    public function create(Request $request) {

        $validatedData = $request->validate([
            'user_id'=>'required|',
            'year' => 'required|',
            'post'=>'required|',
        ]);

        $validatedData["quote"] = "";

        if($user = User::find($validatedData["user_id"])){
            $user->type = "2";
            $user->save();
            $bureau = Bureau::create($validatedData); 
            return response()->json(["message" => "success"]);
        }else 
            return response()->json(null,204);
            
    }
}

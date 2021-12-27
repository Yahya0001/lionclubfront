<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Uses;

class UsesController extends Controller
{
    public function index()
    {
        $uses = Uses::find(1);
        $uses->uses = intval($uses->uses)+1;
        $uses->save(); 
        return response()->json(Uses::find(1), 200);
    }

    public function show()
    {
        $uses = Uses::find(1);
        return response()->json(Uses::find(1), 200);
    }
}

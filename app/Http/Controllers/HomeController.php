<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Event;

class HomeController extends Controller
{
    public function index() {
        $user_count = User::all()->count();
        $time =  time()-(30*60*100);
        $user_login = User::where('last_login' , '>' , $time)->count();
        $events = Event::all()->count();
        $uppcoming_events = Event::where('date' , '>' ,date("Y-m-d" ))->count();



        //return time();

        //return User::where('last_login' , '>' , $time)->get();
        $eventsChar = array();
        $year = date("Y" );
        for ($i=1; $i < 13 ; $i++) { 
            $h = $i+1;
            // $k = $i-;
            $j = ($h < 10) ? "0$h" : $h;
            $z = ($i < 10) ? "0$i" : $i;

            $eventsChar[] = Event::where('date' , '>=' , "$year-$z")->where('date' , '<=' ,"$year-$j")->count();
        }



		return response(['top' => [
            "user_count" => $user_count,
            "user_login" => $user_login,
            "events" => $events,
            "uppcoming_events" => $uppcoming_events,
        ], 'events_char' => $eventsChar]);

    }
}


// 1630694009
// 1632496160 
// 1632405511
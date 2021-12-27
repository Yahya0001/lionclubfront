<?php

namespace App\Http\Controllers;

use App\Models\Event;
use Illuminate\Http\Request;

class EventController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(Event::all(), 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
       // dd($request);
        try {
            $validatedData = $request->validate([
                "title" => "required",
                "description" => "required",
                "date" => "required",
                "type" => "required",
                "place" => "required",
                "document" => "",

            ]);
            if ($request->file('document') != null) {
                $document = UploadController::upload($request->file('document'), ["doc" , "docx" , "odt", "pdf" , "xls", "xlsx" , "ods", "ppt" , "pptx", "txt" , "rtf"], "eventArchive/" );

                $validatedData['document'] = $document;
            
                if($document == "error")
                    abort(422);
            }
            $archive = Event::create($validatedData); 
           

            return response()->json(['message' => 'success' ]);
        }catch(Exception $e) {
            return response()->json(['message' => 'error' ]);

        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Event  $event
     * @return \Illuminate\Http\Response
     */
    public function show(Event $event)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Event  $event
     * @return \Illuminate\Http\Response
     */
    public function edit(Event $event)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Event  $event
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request , $id)
    {
        $event = Event::find($id);
        $data = $this->validate($request, [
            "title" => "required",
            "description" => "required",
            "date" => "required",
            "type" => "required",
            "place" => "required",
        ]);
     
        $event->title = $data['title'];
        $event->date = $data['date'];
        $event->description = $data['description'];
        $event->type = $data['type'];
        $event->place = $data['place'];


        if(!empty($request->document)) {
            $document = UploadController::upload($request->file('document'), ["doc" , "docx" , "odt", "pdf" , "xls", "xlsx" , "ods", "ppt" , "pptx", "txt" , "rtf"], "eventArchive/" );
            $event->document = $document;
        }

        $event->save();
        return response()->json(['message' => 'success' ]);
    }
    


    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Event  $event
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $evenement = Event::find($id);
        if (is_null($evenement)){
            return response()->json(['message' => 'Event Not Found'] , 404);
        }
        $evenement->delete();
        return response()->json(null,204);
    }
}

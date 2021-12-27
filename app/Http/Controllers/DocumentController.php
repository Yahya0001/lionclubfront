<?php

namespace App\Http\Controllers;

use App\Models\Document;
use Illuminate\Http\Request;


class DocumentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    private $parPage = 3;

    public function index()
    {
        $data = Document::paginate($this->parPage);  
        $data=  str_replace('"links"' , '"pages"' ,json_encode($data));
        return response()->json(json_decode($data));
    }


    public function search(Request $request){

        $validatedData = $request->validate([
            'title'=>'max:55',
        ]);

        $data = Document::where('title' , 'LIKE' , '%'.$request->title.'%')->paginate($this->parPage);  
        $data=  str_replace('"links"' , '"pages"' ,json_encode($data));
        return response()->json(json_decode($data));
    }
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        try {

            $validatedData = $request->validate([
                'title'=>'required|max:55',
                'date' => 'required|',
                'document'=>'required|',
            ]);

        //    return $request;
            $document = UploadController::upload($request->file('document'), ["doc" , "docx" , "odt", "pdf" , "xls", "xlsx" , "ods", "ppt" , "pptx", "txt" , "rtf"], "documentsArchive/" );
            //return $image;
            $validatedData['document'] = $document;
            
            $archive = Document::create($validatedData); 

            if($document == "error")
                abort(422);

            return response()->json(['message' => 'success' ]);
        }catch(Exception $e) {
            return response()->json(['message' => 'error' ]);

        }
        

       
        $accessToken = $user->createToken('authToken')->accessToken;

        return response(['user'=> $user, 'access_token'=> $accessToken]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Document  $document
     * @return \Illuminate\Http\Response
     */
    public function show(Document $document)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Document  $document
     * @return \Illuminate\Http\Response
     */
    public function edit(Document $document)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Document  $document
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Document $document)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Document  $document
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $document = Document::find($id);
        if (is_null($document)){
            return response()->json(['message' => 'Document Not Found'] , 404);
        }
        $document->delete();
        return response()->json(null,204);
    }
}

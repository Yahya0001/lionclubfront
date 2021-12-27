<?php

namespace App\Http\Controllers;

use App\Models\Article;
use Illuminate\Http\Request;

class ArticleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(Article::all(), 200);
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
                'article'=>'required|',
                'image'=>'required|',
                'author'=>'required|max:55',
            ]);

            
            $image = UploadController::upload($request->file('image'), ["jpg" , "png" , "jpeg"]);
            //return $image;
            $validatedData['image'] = $image;
            
            $article = Article::create($validatedData); 

            if($image == "error")
                abort(422);

            return response()->json(['message' => 'success' ]);
        }catch(Exception $e) {
            return response()->json(['message' => 'error' ]);

        }
        
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
     * @param  \App\Models\Article  $article
     * @return \Illuminate\Http\Response
     */
    public function show(Article $article)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Article  $article
     * @return \Illuminate\Http\Response
     */
    public function edit(Article $article)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Article  $article
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request , $id)
    {
        $article = Article::find($id);
        $data = $this->validate($request, [
            'title'=>'required|max:55',
            'date' => 'required|',
            'article'=>'required|',
            'author'=>'required|max:55',
        ]);
     
        $article->title = $data['title'];
        $article->date = $data['date'];
        $article->article = $data['article'];
        $article->author = $data['author'];


        if(!empty($request->image)) {
            $photo = UploadController::upload($request->file('image'), ["jpg" , "png" , "jpeg"]);
            $article->image = $photo;
        }

        $article->save();
        return response()->json(['message' => 'success' ]);
    }
    

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Article  $article
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $article = Article::find($id);
        if (is_null($article)){
            return response()->json(['message' => 'article Not Found'] , 404);
        }
        $article->delete();
        return response()->json(null,204);
    }
}

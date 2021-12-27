<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User; 
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    //


    
    public function register(Request $request)
    {
        try {

            
            $validatedData = $request->validate([
                'name'=>'required|max:55',
                'birthday' => 'required|',
                'email'=>'email|required|',
                'photo'=>'required|',
                'password'=>'required|',//password_confirmation (the name of input for password confermation)
            ]);
            // return $request;
            $validatedData['password'] = bcrypt($request->password);
  
            // return $request;
            $photo = UploadController::upload($request->file('photo'), ["jpg" , "png" , "jpeg"]);

            $validatedData['photo'] = $photo;

            
            $user = User::create($validatedData); 

            if($photo == "error")
                abort(422);
            if($request->type == 'admin')
                $user->update([
                    "type" => 1,
                ]);

            return response()->json(['message' => 'success' ]);
        }catch(Exception $e) {
            return response()->json(['message' => 'error' ]);

        }
        

       
        $accessToken = $user->createToken('authToken')->accessToken;

        return response(['user'=> $user, 'access_token'=> $accessToken]);

    }



    public function login(Request $request)
    {

        $loginData = $request->validate([
            'email' => 'email|required',
            'password' => 'required'
        ]);
		if(!auth()->attempt($loginData)) {
            $failed = array (
                'user' => 
                array (
                  'id' => NULL,
                  'name' => NULL,
                  'email' => NULL,
                  'email_verified_at' => NULL,
                  'birthday' => NULL,
                  'type' => NULL,
                  'last_login' => NULL,
                  'photo' => NULL,
                  'created_at' => NULL,
                  'updated_at' => NULL,
                ),
                'access_token' => '0',
            );
          return $failed;
        }
        $user = auth()->user();
        $user->last_login = time();

        $user->save();

        $accessToken = auth()->user()->createToken('authToken')->accessToken;

		
		return response(['user' => auth()->user(), 'access_token' => $accessToken]);

        
    }

    public function index()
    {
        return response()->json(User::all(), 200);
    }


    public function bureau()
    {
        return response()->json(auth('api')->user()->bureau, 200);
    }


    public function update(Request $request)
    {
        $user = auth('api')->user();
        $data = $this->validate($request, [
            'name'=>'required|max:55',
            'birthday' => 'required|',
            // 'phone' => 'required|',
            'email'=>'email|required|',
            'corrent_password'=>'nullable',//password_confirmation (the name of input for password confermation)
            'password'=>'nullable',//password_confirmation (the name of input for password confermation)
     ]);
     
        $user->name = $data['name'];
        $user->email = $data['email'];
        $user->birthday= $data['birthday'];


        if($user->type == 2) {
            $user->bureau()->update([
                'quote' => $request->quote,
            ]);
        }


        if(Hash::check($request->corrent_password , $user->password) ) {
            echo "change password";
            $user->password =  bcrypt($request->password);
        }
        
        if(!empty($request->photo)) {
            $photo = UploadController::upload($request->file('photo'), ["jpg" , "png" , "jpeg"]);

            $user->photo = $photo;
        }
        $user->save();
        return  response([
            'user' => auth('api')->user(),
            'bureau' =>  auth('api')->user()->bureau
        ]);
		        return response([
            'message' => "success"
        ], 200 );
    }
    
    public function destroy($id)
    {
        $user = User::find($id);
        if (is_null($user)){
            return response()->json(['message' => 'User Not Found'] , 404);
        }
        $user->delete();
        return response()->json(null,204);
    }
}

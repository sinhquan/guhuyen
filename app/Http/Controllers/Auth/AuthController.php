<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\User;
use Auth;
use Hash;
use Validator;

class AuthController extends Controller
{
    public $successStatus = 200;
    public function createUser(Request $request)
    {
        $validator = Validator::make($request->all(), [ 
            'name' => 'required|string|max:255',
            'email_or_phone' => 'required|string|max:255|unique:users',
            'password' => 'required|string|min:8|confirmed',
            'password_confirmation' => 'required'
        ]);
        if ($validator->fails()) { 
            return response()->json(['error'=>$validator->errors()], Response::HTTP_UNAUTHORIZED);            
        }

        $input = $request->all(); 
        $input['password'] = Hash::make($input['password']);
        $input['user_type_id'] = 1;
        $user = User::create($input); 
        $success['token'] =  'aaa';//$user->createToken('guhuyenApp')-> accessToken; 
        $success['name'] =  $user->name;
        return response()->json(['success'=>$success], Response::HTTP_OK);
    }
}

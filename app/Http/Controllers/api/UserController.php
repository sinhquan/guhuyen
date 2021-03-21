<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Validator;

class UserController extends Controller
{
    public $successStatus = 200;

    /**
     * login api
     *
     * @return \Illuminate\Http\Response
     */
    public function login()
    {
        if (Auth::attempt(
            [
                'email_or_phone' => request('email_or_phone'),
                'password' => request('password')
            ]
        )) {
            $user = Auth::user();
            $success['token'] = $user->createToken('GuHuyenApp')->accessToken;

            return response()->json(
                [
                    'success' => $success
                ],
                $this->successStatus
            );
        }
        else {
            return response()->json(
                [
                    'error' => 'Unauthorised'
                ], 401);
        }
    }

    /**
     * Register api
     *
     * @return \Illuminate\Http\Response
     */
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(),
            [
                'name' => 'required|string|max:255',
                'email_or_phone' => 'required|string|max:255|unique:users',
                'password' => 'required|string|min:8',
                'c_password' => 'required|same:password',
            ]
        );

        if ($validator->fails()) {
            return response()->json(
                [
                    'error' => $validator->errors()
                ], 401);
        }

        $input = $request->all();
        $input['password'] = bcrypt($input['password']);
        $input['user_type_id'] = 1;
        $user = User::create($input);
        $success['token'] = $user->createToken('GuHuyenApp')->accessToken;
        $success['name'] = $user->name;

        return response()->json(
            [
                'success' => $success
            ],
            $this->successStatus
        );
    }

    /**
     * details api
     *
     * @return \Illuminate\Http\Response
     */
    public function me()
    {
        $user = Auth::user();

        return response()->json(
            [
                'success' => $user
            ],
            $this->successStatus
        );
    }
    /**
     * Logout user (Revoke the token)
     *
     * @return [string] message
     */
    public function logout(Request $request)
    {
        $request->user()->token()->revoke();
        return response()->json([
            'message' => 'Successfully logged out'
        ]);
    }
}

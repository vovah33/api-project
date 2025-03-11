<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'phone_number' => 'required|string|max:255',
            'email' => 'required|email|max:255|unique:users,email',
            'password' => 'required|string|min:8|confirmed',
            'address' => 'nullable|string',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        $user = User::create([
            'first_name' => $request->first_name,
            'last_name' => $request->last_name,
            'phone_number' => $request->phone_number,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'address' => $request->address,
            'role' => 'User',
        ]);

        // В майбутньому потрібно розкоментувати цей рядок
        // $user->sendEmailVerificationNotification();

        return response()->json(['message' => 'Користувача успішно зареєстровано.']);
    }

    public function login(Request $request)
    {
        $user = User::where('email', $request->email)->first();

        if (!$user || !Hash::check($request->password, $user->password)) {
            return response()->json(['message' => 'Неправильний логін або пароль.'], 401);
        }

        // Перевірка підтвердження email (поки вимкнена)
        // if (!$user->hasVerifiedEmail()) {
        //     return response()->json(['message' => 'Будь ласка, підтвердіть свій email.'], 403);
        // }

        session(['user_id' => $user->id, 'user_role' => $user->role]);

        return response()->json(['message' => 'Успішний вхід.']);
    }

    public function logout()
    {
        session()->flush();
        return response()->json(['message' => 'Вихід виконано.']);
    }
}

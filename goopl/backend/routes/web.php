<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Route::options('/api/auth/register', function () {
//     return response()->json(['message' => 'Preflight request passed'])
//         ->header('Access-Control-Allow-Origin', '*')
//         ->header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
//         ->header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
// });

Route::post('/api/auth/register', function (Request $request) {
    return response()->json(['message' => 'Registration successful']);
});

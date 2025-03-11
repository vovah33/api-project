<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Response;

class AppServiceProvider extends ServiceProvider
{
    public function boot()
    {

        // Response::macro('cors', function () {
        //     return Response::make('', 200)
        //         ->header('Access-Control-Allow-Origin', '*')
        //         ->header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
        //         ->header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
        // });
    }

    public function register()
    {
        //
    }
}

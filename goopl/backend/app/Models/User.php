<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable; // Змінюємо базовий клас
use Illuminate\Notifications\Notifiable; // Додаємо Notifiable
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Contracts\Auth\MustVerifyEmail;

class User extends Authenticatable implements MustVerifyEmail
{
    use HasFactory, SoftDeletes, Notifiable;

    protected $fillable = [
        'first_name',
        'last_name',
        'phone_number',
        'email',
        'password',
        'address',
        'role',
        'email_verified_at',
    ];

    protected $hidden = [
        'password',
    ];

    protected $attributes = [
        'role' => 'user',
    ];

    public $timestamps = true;
}

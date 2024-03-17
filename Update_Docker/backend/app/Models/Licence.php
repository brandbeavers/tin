<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Licence extends Model
{
    use HasFactory;


    protected $casts = [
        'valid' => 'integer'
    ];



    protected $fillable = [
        'public_key', 'secret_key', 'encrypt_iv', 'encrypt_key' ,'valid'
    ];


}

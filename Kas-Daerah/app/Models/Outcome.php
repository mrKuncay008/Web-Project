<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Outcome extends Model
{
    use HasFactory;
    protected $table = 'table_outcome';

    protected $fillable = [
        'name',
        'date_colmn',
        'total',
    ];
}

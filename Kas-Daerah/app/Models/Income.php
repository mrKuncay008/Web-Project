<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Income extends Model
{
    use HasFactory;

    protected $table = 'table_income';

    protected $fillable = [
        'name',
        'date_colmn',
        'total',
    ];
}

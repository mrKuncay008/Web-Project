<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Savings extends Model
{
    use HasFactory;
    protected $table = 'table_savings';

    protected $fillable = [
        'name',
        'trans_id',
        'date_colmn',
        'total',
    ];
}

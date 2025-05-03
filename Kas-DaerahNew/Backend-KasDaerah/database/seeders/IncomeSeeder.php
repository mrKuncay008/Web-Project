<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class IncomeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('table_income')->insert([
            ['name' => 'Anggaran Tahunan', 'date_colmn' => '2024-10-28', 'total' => 20000000],
            ['name' => 'Pajak Daerah', 'date_colmn' => '2024-02-02', 'total' => 10000000],
        ]);
    }
}

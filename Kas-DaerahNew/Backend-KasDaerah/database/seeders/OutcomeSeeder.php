<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class OutcomeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('table_outcome')->insert([
            ['name' => 'Perbaikan Jalan', 'date_colmn' => '2024-10-31', 'total' => 3000000],
            ['name' => 'Pengadaan Alat Kesehatan Rumah sakit', 'date_colmn' => '2024-10-31', 'total' => 11000000],
            ['name' => 'Pengadaan Buku SD', 'date_colmn' => '2024-10-31', 'total' => 1000000],
            ['name' => 'pengadaan Molis', 'date_colmn' => '2024-10-31', 'total' => 3000000]
        ]);
    }
}

<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Faker\Factory as Faker;
use Carbon\Carbon;

class IncomeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
//         $faker = Faker::create();
// 
//         for ($i=1; $i <= 6; $i++) { 
//             // insert data Income
//             DB::table('table_income')->insert([
//                 'name' => $faker->text($maxNbChars = 5),
//                 'date_colmn' => Carbon::now(),
//                 'total' => $faker->numberBetween(10000, 100000)
//             ]);
//         }
        DB::table('table_income')->insert([
            ['name' => 'Anggaran Tahunan', 'date_colmn' => '2024-10-28', 'total' => 20000000],
            ['name' => 'Pajak Daerah', 'date_colmn' => '2024-02-02', 'total' => 10000000],
        ]);
    }
}

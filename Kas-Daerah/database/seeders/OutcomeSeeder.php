<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Faker\Factory as Faker;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;

class OutcomeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
//         $faker = Faker::create();
//         $now = Carbon::now();
//         $yesterday = Carbon::yesterday();
// 
//         for ($i=1; $i <= 2; $i++) { 
//             // insert data Income
//             DB::table('table_outcome')->insert([
//                 'name' => $faker->text($maxNbChars = 5),
//                 //'date_colmn' => Carbon::now(),
//                 'date_colmn' => $faker->dateTimeBetween($yesterday, $now),
//                 'total' => $faker->numberBetween(10000, 100000)
//             ]);
//         }
            DB::table('table_outcome')->insert([
                ['name' => 'Makan', 'date_colmn' => '2024-10-31', 'total' => 30000],
                ['name' => 'Skincare', 'date_colmn' => '2024-10-31', 'total' => 110000],
                ['name' => 'Jalan-jalan', 'date_colmn' => '2024-10-31', 'total' => 100000],
                ['name' => 'Beli Udud', 'date_colmn' => '2024-10-31', 'total' => 30000]
            ]);
    }
}

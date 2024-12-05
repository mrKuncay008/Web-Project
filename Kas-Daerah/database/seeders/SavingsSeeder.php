<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Faker\Factory as Faker;

class SavingsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker::create();

        DB::table('table_savings')->insert([
            ['name' => 'Makan', 'trans_id'=> $faker->unique()->regexify('TRXC[0-9]{5}'), 'date_colmn' => '2024-10-31', 'total' => 10000],
            ['name' => 'Saham BCA', 'trans_id'=> $faker->unique()->regexify('TRXC[0-9]{5}'), 'date_colmn' => '2024-10-31', 'total' => 30000],
            ['name' => 'Reksada', 'trans_id'=> $faker->unique()->regexify('TRXC[0-9]{5}'), 'date_colmn' => '2024-10-31', 'total' => 30000],
            ['name' => 'Crypto', 'trans_id'=> $faker->unique()->regexify('TRXC[0-9]{5}'), 'date_colmn' => '2024-10-31', 'total' => 30000],
        ]);
    }
}

<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Faker\Factory as Faker;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // $faker = Faker::create();

            // insert data Income
        DB::table('users')->insert([
            ['name' => 'Pren Jon', 'email' => 'prenundira@gmail.com', 'password' => Hash::make('admin12345')],
            ['name' => 'Olen', 'email' => 'olen.cat@gmail.com', 'password' => Hash::make('admin12345')],
            ['name' => 'Popy', 'email' => 'popy.cat@gmail.com', 'password' => Hash::make('admin12345')],
            ['name' => 'Yiyi Meng', 'email' => 'yiyi.cat@gmail.com', 'password' => Hash::make('admin12345')],
        ]);
    }
}

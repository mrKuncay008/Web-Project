## Install breeze React laravel
ERD: https://www.drawdb.app/editor?shareId=420ee4106d20ffe8c3d85f0701941d47
sumber: https://github.com/laravel/vite-plugin/blob/main/UPGRADE.md#migrating-from-laravel-mix-to-vite

file yang dirubah dahulu
- packge.json
- vite.config
lalu install brezze

di packge.json tambahkan 
```bash
"type": "module"
```  

```bash

```

1.Run git clone <my-cool-project>
2.Run composer install
3.Run cp .env.example .env
4.Run php artisan key:generate
5.Run php artisan migrate
6.Run php artisan serve
7.Go to link localhost:8000

Ekstension VsCode Laravel
- PHP Intelepsen
- Laravel artisan
- Laravel Blade snipset
- Laravel Blade spacer
- Laravel Blade snipset
- Laravel snipset
- Laravel Gotoview

## Migration

```php
php artisan make:migration nama_table // untuk membuat table baru

// File
public function up()
    {
        Schema::create('table_savings', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('trans_id')->unique();
            $table->date('date_colmn');
            $table->integer('total');
            $table->timestamps();
        });
    }
```

```php
php artisan migrate:fresh // Mengrefresh migrate table 
```

## Seeder

php artisan make:seeder namaseeder

```php
 public function run()
    {
        $faker = Faker::create();

        for ($i=1; $i <= 6; $i++) { 
            // insert data Income
            DB::table('table_income')->insert([
                'name' => $faker->text($maxNbChars = 5),
                'date_colmn' => Carbon::now(),
                'total' => $faker->numberBetween(10000, 100000)
            ]);
        }
    }
```
Membuat data manual agar saat di migrate refresh tidak terhapus data nya

php artisan db:seed --class=OutcomeSeeder

## Menambah data menggunakan Tinker
php artisan tinker
```bash
$user = new User atau path model
# lalu masukan data
$user-> name = 'nama' #dst
```
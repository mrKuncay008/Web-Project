# Docs to Backend 
backend menggunakan laravel

# Step-1
clone git backend
```php
 git clone git@git.enigmacamp.com:enigma-camp/enigmacamp-2.0/batch-38-react-native/final-project/404-dev/backend.git (ssh)

 git clone https://git.enigmacamp.com/enigma-camp/enigmacamp-2.0/batch-38-react-native/final-project/404-dev/backend.git (http)
```
- branch master

# Step-2

- buat database di xxampp atau lainnya dengan nama "kasdaerahdb"
- ubah di .env nya juga
- install package
```bash
composer install
```

- setelah itu
```php
php artisan key:generate
php artisan migrate
```

- masukan data dengan seeder
```bash
php artisan db:seed --class=UserSeeder
php artisan db:seed --class=IncomeSeeder
php artisan db:seed --class=OutcomeSeeder
```

# Step-running

```bash
php artisan serve
```

- test api nya

```bash
# contoh income dan outcome

localhost:8000/api/trans

# income

localhost:8000/api/income

#outcome

localhost:8000/api/outcome
```

Test di web atau postman
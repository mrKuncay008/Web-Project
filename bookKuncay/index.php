<?php 
      // Mendeklarasi email dan pass benar
      // 1. mengechechk tombol submit
           
            if (isset($_POST["submit"])) {
      
      // chek email & password
      
            if ($_POST["username"] == "maspren@undira" && $_POST["password"] == "1234567@") {
      
      // 2. Jika Benar, direct ke halaman berikutnya
      
      header("Location: index2.php");
      exit;
    }
      // 3. jika salah, Tampilkan eror
    else { 
      $error = true;
    }
  }
?>
  <!DOCTYPE html>
  <html>

  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    
      <title>Login Page </title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
  </head>

  <body style="background-color: darkgray;">
      

  <form action="" method="post">
  <section class="vh-100 gradient-custom">
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        <div class="card bg-dark text-white" style="border-radius: 1rem;">
          <div class="card-body p-5 text-center">

            <div class="mb-md-5 mt-md-4 pb-5">

              <h2 class="fw-bold mb-2 text-uppercase">BackupBook Mr.Kuncay</h2>
              <p class="text-white-50 mb-5">Please Login @</p>
    <?php if ( isset($error) ) : ?>
        <p style=" color: red;">username / password salah! Coba lagi </p>
    <?php endif; ?>

              <div class="form-outline form-white mb-4">
                <label class="form-label" for="username">Username</label>
                <input type="username" name="username" id="username" class="form-control form-control-lg" />
              </div>

              <div class="form-outline form-white mb-4">
                <label class="form-label" for="password">Password</label>
                <input type="password" name="password" id="password" class="form-control form-control-lg" />
              </div>

              <button class="btn btn-outline-light btn-lg px-5" type="submit" name="submit">Login</button>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</form>
</body>
</html>


  <!-- <?php if ( isset($error) ) : ?>
      <p style=" color: red;">username / password salah! Coba lagi </p>
    <?php endif; ?>
     
        method post = untuk menampilkan, php tapi tidak menampilkan di url. Kecuali get (akan menampilkan di url)
        <form action="" method="post">
          <label for="username"> Username </label>
          <input type="username" name="username" id="username">
          <br>
          <br>
          <label for="password"> password </label>
          <input type="password" name="password" id="password">
          <br>
          <br>
          <button type="submit" name="submit">Masuk</button>
        </form> -->
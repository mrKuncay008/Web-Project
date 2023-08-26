<?php 
      // 
      // 1. mengechechk tombol submit
           
            if (isset($_POST["submit"])) {
      
      // chek password
      
            if ($_POST["password"] == "645533Maspren@") {
      
      // 2. Jika Benar, direct ke halaman berikutnya
      
      header("Location: index2.php");
      exit;
    }
      // 3. jika salah, Tampilkan eror
    else { 
      $error = true;
      echo "<script> alert('Coba Lagi'); </script>";
    }
  }
?>

<!DOCTYPE html>
<html lang="en" >
<head>
  <meta charset="UTF-8">
  <title>Login Page with Background Image Example</title>
  <link rel="stylesheet" href="pass.css">

</head>
<body>
<div id="bg"></div>
<form action="" method="post">
<!-- <button onclick="document.getElementById('id01').style.display='block'" style="width:auto;">Login</button>
-->
<div class="kotak"> 
<h2> Welcome Please Login</h2>
<form>
        <div class="form-field">
            <input type="password" name="password" id="password" placeholder="Password" required/>
        </div>

      <button class="btn" name="submit" type="submit">Log in</button>
      <a href="index.html" role="button">Back</a>
    </div>
</form>
<!-- partial -->
  
</body>
</html>

import brand from './meong.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <nav class="navbar navbar-expand-lg navbar-dark" >
      <div class="container-fluid">
        {/* // eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a class="navbar-brand" href="#">
          <img src={brand} alt="" width="30" height="24" />
          KuncayFilm21
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Daftar
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Drama</a></li>
                <li><a class="dropdown-item" href="#">Pengajian</a></li>
              </ul>
            </li>
          </ul>
          <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
    <div class="col-sm1">
    <div class="col-sm0">
        <a class="navbar-brand" style="font-size: large; color:whitesmoke;">
          <img src="pomosda-logo.png" height="40" width="40" class="Logo" alt="" />
            kajian Romo kyai tanjung
        </a>
      </div>
      <td> 
        <div class="container">
          <div class="row">
            <div class="col-sm">
              <div class="flex-container">
                <div  class="flex-item-left">
                  {/* <!-- ini bagian div dan video --> */}
                  <video width="250" height="200" controls>
                     <source src="pengajian\Kiai Tanjung - Pemurnian Makna Santri Segmen 1.mp4.mp4" type="video/mp4" />
                      </video> 
                        <h2 style="font-size: medium; color: whitesmoke; font-weight: bold; font-family: sans-serif;">
                          Pemurnian Makna Santri Segmen 1
                  </h2></div>
                <div  class="flex-item-center">
                  <video width="250" height="200" controls>
                     <source src="pengajian\Kiai Tanjung - Pemurnian Makna Santri Segmen 2.mp4.mp4" type="video/mp4" />
                      </video> 
                        <h2 style="font-size: medium; color: whitesmoke; font-weight: bold; font-family: sans-serif;">
                          Pemurnian Makna Santri Segmen 2
                  </h2></div>
                  <div  class="flex-item-right">
                  <video width="250" height="200" controls>
                     <source src="pengajian\Kiai Tanjung - Pemurnian Makna Santri Segmen 3.mp4.mp4" type="video/mp4" />
                      </video> 
                        <h2 style="font-size: medium; color: whitesmoke; font-weight: bold; font-family: sans-serif;">
                          Pemurnian Makna Santri Segmen 3
                  </h2></div>
            </div>
             <div class="flex-container">
                <div  class="flex-item-left">
                  <video width="250" height="200" controls>
                     <source src="pengajian\KIAI TANJUNG - PERWUJUDAN Segmen 1.mp4.mp4" type="video/mp4" />
                      </video> 
                        <h2 style="font-size: medium; color: whitesmoke; font-weight: bold; font-family: sans-serif;">
                          Perwujudan segmen 1
                  </h2></div>
                <div  class="flex-item-center">
                  <video width="250" height="200" controls>
                     <source src="pengajian\KIAI TANJUNG - PERWUJUDAN Segmen 2.mp4" type="video/mp4" />
                      </video> 
                        <h2 style="font-size: medium; color: whitesmoke; font-weight: bold; font-family: sans-serif;">
                          Perwujudan Segmen 2
                  </h2></div>
                   <div  class="flex-item-right">
                  <video width="250" height="200" controls>
                     <source src="pengajian/KIAI TANJUNG - PERWUJUDAN PEMBEBASAN DALAM KONTEKSTUALISASI  KEMERDEKAAN SEJATI Segmen 3.mp4.mp4" type="video/mp4" />
                      </video> 
                        <h2 style="font-size: medium; color: whitesmoke; font-weight: bold; font-family: sans-serif;">
                          Perwujudan Segmen 3
                    </h2>
                  </div>
            </div>
            {/* <!-- div dan video end --> */}
          </div>
        </div>
        </div>
      </td>
    </div>
  </div>
  );
}
// Note Next: 
// mengganti semua attribute di css dan js yang belum di rubah
export default App;

import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
// File
import jatayu from '../img/pomosda-logo.png';
import video1 from '../pengajian/Kiai Tanjung - Pemurnian Makna Santri Segmen 1.mp4.mp4';
import video2 from '../pengajian/Kiai Tanjung - Pemurnian Makna Santri Segmen 2.mp4.mp4';
import video3 from '../pengajian/Kiai Tanjung - Pemurnian Makna Santri Segmen 3.mp4.mp4';
import video4 from '../pengajian/KIAI TANJUNG - PERWUJUDAN Segmen 1.mp4.mp4';
import video5 from '../pengajian/KIAI TANJUNG - PERWUJUDAN Segmen 2.mp4';
import video6 from '../pengajian/KIAI TANJUNG - PERWUJUDAN PEMBEBASAN DALAM KONTEKSTUALISASI  KEMERDEKAAN SEJATI Segmen 3.mp4.mp4';


const Ngaji = () => {
    return (
    <div className="col-sm1">
    <div className="col-sm0">
        <a className="navbar-brand">
          <img src={jatayu} height="40" width="40" className="Logo" alt="" />
            kajian Romo kyai tanjung
        </a>
    </div>
      <td>
          <div className = "row">
            <div className = "flex-container">
                <div className="flex-item-left">
                    <video width={250} height={200} controls>
                        <source src={video1} type='video/mp4'/>
                    </video>
                      <h2 className='judulA'>Pemurnian Makna Santri Segmen 1</h2>
                </div>
                <div className="flex-item-center">
                    <video width={250} height={200} controls>
                        <source src={video2} type='video/mp4'/>
                    </video>
                        <h2 className='judulA'>Pemurnian Makna Santri Segmen 2</h2>
                </div>
                <div  className="flex-item-right">
                    <video width={250} height={200} controls>
                        <source src={video3} type='video/mp4' />
                    </video> 
                        <h2 className='judulA'>Pemurnian Makna Santri Segmen 3</h2>
                </div>
            </div>

            <div className = "flex-container">
            <div  className="flex-item-left">
                <video width={250} height={200} controls>
                     <source src={video4} type="video/mp4" />
                </video> 
                    <h2 className='judulA'>Perwujudan segmen 1</h2>
            </div>
                <div  className="flex-item-center">
                  <video width={250} height={200} controls>
                     <source src={video5} type="video/mp4" />
                      </video> 
                        <h2 className='judulA'>Perwujudan Segmen 2</h2>
                </div>
                <div  className="flex-item-right">
                  <video width={250} height={200} controls>
                     <source src={video6} type="video/mp4" />
                      </video> 
                        <h2 className='judulA'>Perwujudan Segmen 3</h2>
                </div>
            </div>
        </div>
      </td>
    </div>
    );
}

export default Ngaji
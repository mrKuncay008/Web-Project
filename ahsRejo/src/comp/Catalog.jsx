import logoAqua from '../assets/images/aqua-logo.png'
import AquaGalonGambar from '../assets/images/air-galon-aqua.jpg'

import AquaBotol from '../assets/images/botol.jpg'
import AquaGln from '../assets/images/aqua-galon.jpeg'
import VitGln from '../assets/images/vit.jpg'
import Gas from '../assets/images/Gas.jpg'

import Fade from 'react-reveal/Fade';

const CatalogPage = () => {
    
    return (
    <>
    <div className='conatainer mx-auto p-4'>
        <div className="title text-start ">
            <Fade left distance='30%' duration={2000} delay={2000}>
                <h2 className=" font-semibold drop-shadow-sm text-cyan-500">Rejo</h2>
                <h2 className=" font-semibold drop-shadow-sm text-green-400">Banjar Wijaya </h2>
            </Fade>
        </div>

        <div className='gambar2 container pt-5 mb-4 '>
            <Fade bottom distance='20%' duration={3000} delay={5000}>
                <img src={logoAqua} alt="image" />
                <h3 className=" text-center font-bold drop-shadow-sm text-blue-400">100% Murni</h3>
                <p className='font-semibold'>Diciptakan oleh alam, AQUA berasal dari sumber air terlindungi, 100% murni tanpa tambahan apapun. 
                    Air aqua selalu segar tanpa harus didinginkan, sebagaimana alam ingin kamu meminumnya.</p>
            </Fade>
        </div>
        <Fade top distance='20%' duration={2000} delay={6000}>
            <img className='rounded-2xl w-full h-auto' src={AquaGalonGambar} />
        </Fade>

        <div className='gambar-catalog grid '>
        <Fade top distance='30%' duration={2000} delay={7000}>
            <img className='gbrCata' src={AquaBotol} alt="botol" />
            <img className='gbrCata' src={AquaGln} alt="galon" />
            <img className='gbrCata' src={VitGln} alt="vit" />
            <img className='gbrCata gbr-gas' src={Gas} alt="gas" />
        </Fade>
        </div>
    </div>
    </>
    );
}
export default CatalogPage;
import logoAqua from '../assets/images/aqua-logo.png'

const CatalogPage = () => {
    
    return (<>
        <div className="title container text-start m-2">
            <h2 className=" font-semibold drop-shadow-sm text-cyan-500">Rejo</h2>
            <h2 className=" font-semibold drop-shadow-sm text-green-400">Banjar Wijaya </h2>
        </div>

        <div className='gambar2 container '>
            <img src={logoAqua} alt="image" />
            <h3 className=" text-center font-bold drop-shadow-sm text-blue-400">100% Murni</h3>
            <p className='font-semibold'>Diciptakan oleh alam, AQUA berasal dari sumber air terlindungi, 100% murni tanpa tambahan apapun. 
                Air aqua selalu segar tanpa harus didinginkan, sebagaimana alam ingin kamu meminumnya.</p>
        </div>
        </>
    );
}
export default CatalogPage;
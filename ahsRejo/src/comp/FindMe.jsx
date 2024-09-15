import {useState} from 'react';

import Grabmart from '../assets/images/grabmart-logo.png';
import Gmap from '../assets/images/gmap.png';

const FindMe = () => {
    const [grabmartUrl] = useState('https://r.grab.com/g/2-2-6-C36YRGJHR8CUGJ');
    const [gmapUrl] = useState('https://maps.app.goo.gl/TUgDHZ5j8eskVwGv7');

    return (
        <>
            <div className="cont-findme container pt-5 mb-4 text-center">
                <h2 className="font-bold text-slate-900">Find Us</h2>
                <div className="mart-app grid grid-cols-2 justify-items-center place-content-center ">
                    <a href={grabmartUrl} target="_blank" rel="noopener noreferrer">
                        <img className='logoMart' src={Grabmart} alt="Grab" />
                    </a>
                    <a href={gmapUrl} target="_blank">
                        <img className='logoMart' src={Gmap} alt="Gmap" />
                    </a>
                </div>
            </div>
        </>
    );
}

export default FindMe;
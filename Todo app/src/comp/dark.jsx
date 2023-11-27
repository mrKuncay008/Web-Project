import { useState } from "react";

function Dark() {
    const [darkMod, setDarMod] = useState(false);
    const Toggle = () => {
        setDarMod(!darkMod);
        document.body.classList.toggle("dark-mode");
    };

    return (
        <div className={darkMod ? 'dark-mode' : 'light-mode'}>
        <button className="Tombol" onClick={Toggle}>
            {darkMod ? 'Ganti Mode Terang' : 'Ganti Mode Gelap'}
        </button>
        </div>
    );
}

export default Dark

import React, { useState } from 'react';

interface HeaderMobileProps {
    larguraDaTela: number;
}

const HeaderMobile: React.FC<HeaderMobileProps> = ({ larguraDaTela }) => {

    const [hamburguerAberto, setHamburguerAberto] = useState(false);

    
    
    //na próxima vez, isso aqui faz a mesma coisa, com menos código:
    //  setHamburguerAberto(!hamburguerAberto);
    function abrirMenu() {
        if (hamburguerAberto) {
            setHamburguerAberto(false)
        } else {
            setHamburguerAberto(true)
        }

    }

    const posicaoEsquerda = hamburguerAberto ? 0 : -larguraDaTela;


    return (
        <div className='z-10 w-full fixed top-0 left-0 p-8'>
            <button onClick={abrirMenu} className='z-10 flex flex-col gap-2'>
                <div className='z-10 w-8 h-0.5 bg-gray-800'></div>
                <div className='z-10 w-8 h-0.5 bg-gray-800'></div>
                <div className='z-10 w-8 h-0.5 bg-gray-800'></div>
            </button>

            <div 
            className={`z-0 absolute w-full h-screen top-0 left-0 flex flex-col gap-2 p-8 pt-20 bg-gray-800/25 font-bold hamburguer-transition`}
            style={{left: `${posicaoEsquerda}px` }}
            >
                <a className='z-0 text-gray-600' href="#A">Início</a>
                <a className='z-0 text-gray-600' href="#B">Sobre</a>
                <a className='z-0 text-gray-600' href="#C">Modalidades</a>
                <a className='z-0 text-gray-600' href="#D">Galeria</a>
                <a className='z-0 text-gray-600' href="#E">Depoimentos</a>
                <a className='z-0 text-gray-600' href="#F">FAQ</a>
            </div>

        </div>
    );
};

export default HeaderMobile;
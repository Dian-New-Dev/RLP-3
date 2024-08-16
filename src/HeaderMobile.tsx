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
        <div className='z-50 w-full fixed top-0 left-0 p-8'>
            <button onClick={abrirMenu} className='z-10 flex flex-col gap-2'>
                <div className='z-50 w-8 h-0.5 bg-sky-200'></div>
                <div className='z-50 w-8 h-0.5 bg-sky-200'></div>
                <div className='z-50 w-8 h-0.5 bg-sky-200'></div>
            </button>

            <img className='z-50 px-8 py-5 absolute top-0 right-0 w-[100px] scale-[1]' src="./public/assets/img/logo.png" alt="Logo da empresa" />

            <div 
            className={`z-40 absolute w-full h-screen top-0 left-0 flex flex-col gap-5 p-8 pt-20 bg-gray-800/100 font-bold hamburguer-transition`}
            style={{left: `${posicaoEsquerda}px` }}
            >
                <a className='z-40 text-3xl font-normal text-sky-200' href="#A">Início</a>
                <a className='z-40 text-3xl font-normal text-sky-200' href="#B">Sobre</a>
                <a className='z-40 text-3xl font-normal text-sky-200' href="#C">Modalidades</a>
                <a className='z-40 text-3xl font-normal text-sky-200' href="#D">Galeria</a>
                <a className='z-40 text-3xl font-normal text-sky-200' href="#E">Depoimentos</a>
                <a className='z-40 text-3xl font-normal text-sky-200' href="#F">FAQ</a>
            </div>

        </div>
    );
};

export default HeaderMobile;
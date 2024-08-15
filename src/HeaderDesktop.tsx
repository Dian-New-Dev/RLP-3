import React from 'react';

const HeaderDesktop: React.FC = () => {
    return (
        <div id='header-desktop' className='fixed w-full flex items-center gap-8'>
            <a className='text-gray-600' href="#A">Início</a>
            <a className='text-gray-600' href="#B">Sobre</a>
            <a className='text-gray-600' href="#C">Modalidades</a>
            <a className='text-gray-600' href="#D">Galeria</a>
            <a className='text-gray-600' href="#E">Depoimentos</a>
            <a className='text-gray-600' href="#F">FAQ</a>
        </div>
    );
};

export default HeaderDesktop;
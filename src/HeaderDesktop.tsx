import React, { useEffect, useState } from 'react';

const HeaderDesktop: React.FC = () => {

    const [rolouScroll, setRolouScroll] = useState(false);

    useEffect(() => {
        const seRolarScroll = () => {
            if (window.scrollY > 50) {
                setRolouScroll(true);
            } else {
                setRolouScroll(false)
            }
        }


        window.addEventListener('scroll', seRolarScroll);

        return () => {
            window.removeEventListener('scroll', seRolarScroll);
        };

    }, []);



    return (
        <div>
            <div id='header-desktop' className='z-50 p-8 fixed w-full flex items-center justify-center gap-8'>
                <a className='text-sky-200 font-semibold' href="#A">Início</a>
                <a className='text-sky-200 font-semibold' href="#B">Sobre</a>
                <a className='text-sky-200 font-semibold' href="#C">Modalidades</a>
                <a className='text-sky-200 font-semibold' href="#D">Galeria</a>
                <a className='text-sky-200 font-semibold' href="#E">Depoimentos</a>
                <a className='text-sky-200 font-semibold' href="#F">FAQ</a>
            </div>

            <div className={`z-40 w-full fixed top-0 left-0 p-10 transicao-gradiente-desktop ${rolouScroll ? 'gradiente' : 'sem-gradiente'}`}></div>
        </div>

    );
};

export default HeaderDesktop;
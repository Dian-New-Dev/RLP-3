import React from 'react';

const Footer: React.FC = () => {
    return (
        <div className='z-10 overflow-hidden relative p-2 bg-gray-800 leading-4 text-sky-200 text-center'>
            <div className='z-10 w-full text-center text-sky-200'>
                <h5 className='z-10 text-md font-semibold leading-4'>"Não há ventos favoráveis para quem não sabe aonde vai."</h5>
                <h6 className='z-10 text-sm font-normal italic'>Sêneca</h6>
            </div>

            <div className='z-10 flex gap-4 items-center p-4'>
                <div id='social-media' className='z-10 flex gap-2 w-1/3'>
                    <a href="#">
                        <img className='z-10 w-8' src="public/assets/img/instagram.png" alt="Ícone com link para Instagram da empresa." />
                    </a>
                    <a href="#">
                        <img className='z-10 w-8' src="public/assets/img/twitter.png" alt="Ícone com link para Twitter/X da empresa." />
                    </a>
                    <a href="#">
                        <img className='z-10 w-8' src="public/assets/img/facebook.png" alt="Ícone com link para Facebook da empresa." />
                    </a>
                </div>


                <div className='z-10 flex gap-2 w-1/3 text-sm leading-3'>
                    <a href="#">Termos e Condições</a>
                </div>

                <div className='z-10 flex gap-2 w-1/3 text-sm leading-3'>
                    <p>Página Desenvolvida por Diego Antunes</p>
                </div>

            </div>

            <img className='z-0 w-96 top-[-100px] right-[-100px] absolute opacity-20' src="./public/assets/img/logo.png" alt="Logo da empresa"/>

        </div>
    );
};

export default Footer;
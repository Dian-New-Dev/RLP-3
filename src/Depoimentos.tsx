import React from 'react';
import DepoimentosData from './DepoimentosData';

const Depoimentos: React.FC = () => {

    



    return (
        <div className='z-10 p-8'>
            <div className='z-10 w-full flex justify-end'>
                <div id='h3' className='z-10 text-sky-100 font-bold flex relative border-b-4 border-r-4 px-4 py-4 border-amber-600 items-start text-right w-44 lg:scale-150 origin-top-right'>
                    <h3 className='z-10 w-[100%]  text-2xl'>... e Histórias Para Recordar</h3>
                    <img className='z-10 absolute w-[80px] pl-[20px]  opacity-100 bottom-2 right-[110px] rotate-[270deg]' src="public/assets/img/plane.svg" alt="Imagem de fundo na forma de um avião" />
                </div>
            </div>

            <div id="what" className='z-10 mt-8 lg:mt-32 w-full max-w-[1024px] mx-auto esconder-scrollbar'>
                <DepoimentosData />
            </div>
        </div>
    );
};

export default Depoimentos;
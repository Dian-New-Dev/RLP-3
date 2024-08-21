import React from 'react';
import DepoimentosData from './DepoimentosData';

const Depoimentos: React.FC = () => {

    



    return (
        <div className='p-8 border border-t-0 border-b-0'>
            <div id='h3' className='text-gray-700 font-bold flex relative border-b-4 border-l-4 px-4 py-4 border-amber-600 items-start w-44'>
                <h3 className='w-[100%] z-10 text-2xl'>... e Histórias Para Recordar</h3>
                <img className='absolute w-[80px] pl-[20px] z-0 opacity-100 bottom-2 left-[110px]' src="public/assets/img/plane.svg" alt="Imagem de fundo na forma de um avião" />
            </div>

            <div className='mt-8'>
                <DepoimentosData />
            </div>
        </div>
    );
};

export default Depoimentos;
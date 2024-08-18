import React from 'react';

const Galeria: React.FC = () => {
    return (
        <div id='modalidades' className=' text-gray-700 font-bold p-8 flex flex-col gap-16 bg-galeria border border-gray-90'>
            <div id='h3' className='flex relative border-b-4 border-l-4 px-4 py-4 border-amber-600 items-start w-44'>
                <h3 className='w-[80%] z-10 text-2xl'>Emoções Para Toda a Vida...</h3>
                <img className='absolute w-[80px] pl-[20px] z-0 opacity-100 bottom-[10px] left-[90px]' src="public/assets/img/plane.svg" alt="Imagem de fundo na forma de um avião" />
            </div>

            <div className='w-full p-1 bg-amber-600 rounded-lg'>

                <div className='w-full overflow-scroll flex snap-x snap-mandatory'>
                    <img className='snap-center w-[600px] largura-minima-padrao' src="/public/assets/img/galeria0.jpg" alt="Fotografia de " />
                    <img className='snap-center w-[600px] largura-minima-padrao' src="/public/assets/img/galeria1.jpg" alt="Fotografia de " />
                    <img className='snap-center w-[600px] largura-minima-padrao' src="/public/assets/img/galeria2.jpg" alt="Fotografia de " />
                    <img className='snap-center w-[600px] largura-minima-padrao' src="/public/assets/img/galeria3.jpg" alt="Fotografia de " />
                    <img className='snap-center w-[600px] largura-minima-padrao' src="/public/assets/img/galeria4.jpg" alt="Fotografia de " />
                </div>

                <div className='flex'>
                    <div className='w-1/2 bg-gray-700 text-sky-100 font-thin'>
                        <img src="" alt="Ícone de fotos" />
                        <p>{}/5</p>
                    </div>
                    <div className='w-full'>
                        {}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Galeria;
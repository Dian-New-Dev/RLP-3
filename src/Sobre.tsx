import React from 'react';



const Sobre: React.FC = () => {
    return (
        <div className=' text-sky-100 p-8 flex flex-col gap-16 border border-gray-900 bg-gray-800/100'>
            <div id='h3' className='flex relative border-b-4 border-l-4 px-4 py-4 border-amber-600 items-start w-44'>
                <h3 className='w-[100%] z-10 text-2xl'>Quem Somos</h3>
                <img className='absolute w-[80px] pl-[20px] z-0 opacity-100 bottom-4 left-[90px]' src="public/assets/img/plane.svg" alt="Imagem de fundo na forma de um avião" />
            </div>

            <div className='flex justify-end'>
                <p className='z-10 text-right font-thin w-3/4'>Na Altitude Máxima, oferecemos uma experiência de paraquedismo que vai além do ordinário. Fundada por amantes de adrenalina e especialistas em salto livre, nossa missão é proporcionar emoções inesquecíveis e vistas espetaculares do céu.</p>
            </div>
        </div>
    )

}

export default Sobre;
import React from 'react';



const Sobre: React.FC = () => {
    return (
        <div className=' text-sky-100 p-8 lg:p-16 flex flex-col gap-16 lg:gap-32'>
            <div id='h3' className='flex relative border-b-4 border-l-4 px-4 py-4 border-amber-600 items-start w-44 font-bold scale-100 lg:scale-150 origin-top-left'>
                <h3 className='w-[100%] z-10 text-2xl'>Quem Somos</h3>
                <img className='absolute w-[80px] pl-[20px] z-0 opacity-100 bottom-4 left-[90px]' src="public/assets/img/plane.svg" alt="Imagem de fundo na forma de um avião" />
            </div>

            <div className='flex justify-end'>
                <p className='z-10 text-right w-3/4 font-normal text-md lg:text-lg'>Na Altitude Máxima, oferecemos uma experiência de paraquedismo que vai além do ordinário. Fundada por amantes de adrenalina e especialistas em salto livre, nossa missão é proporcionar emoções inesquecíveis e vistas espetaculares do céu.</p>
            </div>
        </div>
    )

}

export default Sobre;
import React from 'react';



const Hero: React.FC = () => {
    return (
        <div id='hero' className='relative w-full h-full p-20 py-32 sm:py-64 flex flex-col gap-4 sm:gap-12 text-center items-center overflow-hidden'>
            <h1 className='z-40 text-5xl  text-sky-200 font-medium '>Emoção às Alturas</h1>
            <h2 className='z-40 text-2xl text-sky-100 font-medium'>Salte com a Altitude Máxima</h2>
            <div className='z-40 flex gap-4'>
                <button className='leading-5 border border-gray-800/50 w-32 p-2 rounded-lg bg-amber-600 text-sky-100 font-bold hover:scale-110 hover:bg-amber-700 hover:border-gray-500 hover:font-bold'>Agendar Salto</button>
                <button className='leading-5 border border-gray-800/50 w-32 p-2 rounded-lg bg-amber-600 text-sky-100 font-bold hover:scale-110 hover:bg-amber-700 hover:border-gray-500 hover:font-bold'>Saber Mais</button>
            </div>

            <video className='z-30 absolute top-0 left-0 w-full h-full scale-[3] md:scale-[2]' autoPlay muted loop src="/assets/video/sky-peaceful.mp4"></video>
            <div className='z-30 absolute top-0 left-0 w-full h-full bg-sky-800/25'></div>
        </div>
    )

}



export default Hero;


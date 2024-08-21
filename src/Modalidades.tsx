import React from 'react';



const Modalidades: React.FC = () => {
    return (
        <div id='modalidades' className=' text-sky-100 p-8 flex flex-col gap-16 border border-gray-900 bg-gray-700/100 m-4 rounded-3xl'>
            <div id='h3' className='flex relative border-b-4 border-l-4 px-4 py-4 border-amber-600 items-start w-44'>
                <h3 className='w-[100%] z-10 text-2xl'>Modalidades</h3>
                <img className='border-b-4 absolute w-[80px] pl-[20px] border-amber-600 z-0 opacity-100 top-1 left-[170px]' src="public/assets/img/plane.svg" alt="Imagem de fundo na forma de um avião" />
            </div>

            <div className='flex flex-col gap-16'>
                <div className='flex flex-col gap-2'>
                    <div className='flex items-center gap-4'>
                        <img className='w-[50px] h-[50px] bg-amber-600 rounded-full p-2' src="public/assets/img/tandem.png" alt="Ícone de salto tandem" />
                        <h4 className='text-lg font-bold'>Salto Tandem</h4>
                    </div>
                    <p>Para iniciantes que querem experimentar a sensação do salto com total segurança. Salte com um instrutor confiável e profissional.</p>
                </div>

                <div className='flex flex-col gap-2'>
                    <div className='flex items-center gap-4'>
                        <img className='w-[50px] bg-amber-600 rounded-full p-2' src="public/assets/img/solo.png" alt="Ícone de salto solo" />
                        <h4 className='text-lg font-bold'>Salto Solo</h4>
                    </div>
                    <p>Paraquedistas experientes podem desfrutar da liberdade do salto solo. Desbrave os céus de Campo Grande, à sua maneira.</p>
                </div>

                <div className='flex flex-col gap-2'>
                    <div className='flex items-center gap-4'>
                        <img className='w-[50px] bg-amber-600 rounded-full p-2' src="public/assets/img/grupo.png" alt="Ícone de salto em grupo" />
                        <h4 className='text-lg font-bold'>Salto em Formação</h4>
                    </div>
                    <p>Desafie-se com saltos em equipe e crie formações aéreas espetaculares. Embeleze os céus da capital com visuais estonteantes.</p>
                </div>
            </div>
            <div className='grid place-items-center'>
            <button className='leading-5 border border-gray-800/50 w-32 p-2 rounded-lg bg-amber-600 text-sky-100'>Qual devo escolher?</button>
            </div>
        </div>
    )

}



export default Modalidades;


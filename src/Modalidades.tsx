import React from 'react';



const Modalidades: React.FC = () => {
    return (
        <div id='C' className='z-10 text-sky-100 p-8 lg:p-16 flex flex-col gap-16 lg:gap-32 border border-gray-900 bg-gray-700/75 m-4 rounded-3xl'>
            <div id='h3' className='z-10 flex relative border-b-4 border-l-4 px-4 py-4 border-amber-600 items-start w-44 scale-100 lg:scale-150 origin-top-left'>
                <h3 className='z-10 w-[100%] text-2xl font-bold'>Modalidades</h3>
                <img className='z-10 border-b-4 absolute w-[80px] pl-[20px] border-amber-600 opacity-100 top-1 left-[170px]' src="public/assets/img/plane.svg" alt="Imagem de fundo na forma de um avião" />
            </div>

            <div id="modalidades-flexbox" className='z-10 flex flex-col lg:flex-row lg:justify-center gap-16'>
                <div className='z-10 flex flex-col gap-2 lg:gap-8 p-6 hover:shadow-2xl hover:scale-110 hover:bg-gray-700 rounded-3xl'>
                    <div className='z-10 flex items-center gap-4'>
                        <img className='z-10 w-[50px] h-[50px] bg-amber-600 rounded-full' src="public/assets/img/salto-tandem.png" alt="Ícone de salto tandem" />
                        <h4 className='z-10 text-lg lg:text-2xl font-bold'>Salto {<br/>} Tandem</h4>
                    </div>
                    <p className='text-md lg:text-lg'>Para iniciantes que querem experimentar a sensação do salto com total segurança. Salte com um instrutor confiável e profissional.</p>
                </div>

                <div className='z-10 flex flex-col gap-2 lg:gap-8 p-6 hover:shadow-2xl hover:scale-110 hover:bg-gray-700 rounded-3xl'>
                    <div className='z-10 flex items-center gap-4'>
                        <img className='z-10 w-[50px] bg-amber-600 rounded-full' src="public/assets/img/salto-solo.png" alt="Ícone de salto solo" />
                        <h4 className='z-10 text-lg lg:text-2xl font-bold'>Salto {<br/>} Solo</h4>
                    </div>
                    <p className='text-md lg:text-lg'>Paraquedistas experientes podem desfrutar da liberdade do salto solo. Desbrave os céus de Campo Grande, à sua maneira.</p>
                </div>

                <div className='z-10 flex flex-col gap-2 lg:gap-8 p-6 hover:shadow-2xl hover:scale-110 hover:bg-gray-700 rounded-3xl'>
                    <div className='z-10 flex items-center gap-4'>
                        <img className='z-10 w-[50px] bg-amber-600 rounded-full' src="public/assets/img/salto-grupo.png" alt="Ícone de salto em grupo" />
                        <h4 className='z-10 text-lg lg:text-2xl font-bold'>Salto em {<br/>} Formação</h4>
                    </div>
                    <p className='text-md lg:text-lg'>Desafie-se com saltos em equipe e crie formações aéreas espetaculares. Embeleze os céus da capital com visuais estonteantes.</p>
                </div>
            </div>
            <div className='z-10 grid place-items-center'>
            <button className='z-10 leading-5 border border-gray-800/50 w-32 p-2 rounded-lg bg-amber-600 text-sky-100 mt-0 lg:mt-[-50px] font-bold hover:scale-110 hover:bg-amber-700 hover:border-gray-500 hover:font-bold'>Qual devo escolher?</button>
            </div>
        </div>
    )

}



export default Modalidades;


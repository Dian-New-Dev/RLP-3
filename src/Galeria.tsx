import React, { useState, useEffect} from 'react';

const Galeria: React.FC = () => {

const [contador, setContador] = useState(1);

    useEffect(() => {
        const intervalo = setInterval(() => {
            setContador(contador => {
                if (contador < 5) {
                    return contador + 1;
                } else {
                    return contador = 1;
                }
            });
        }, 5000);
        return () => clearInterval(intervalo);
    }, []);

    const contadorStringifado = contador.toString();
    const numeroDoSrc = contadorStringifado;
    const contadorDeImagems = contadorStringifado;
    const src = `/public/assets/img/galeria${numeroDoSrc}.jpg`

    return (
        <div id='modalidades' className='z-10 text-sky-100 font-bold p-8 flex flex-col gap-8 lg:gap-32 mx-auto'>
            <div id='h3' className='z-10 flex relative border-b-4 border-l-4 px-4 py-4 border-amber-600 items-start w-44 scale-100 lg:scale-150 origin-top-left'>
                <h3 className='z-10 w-[80%] text-2xl'>Emoções Para Toda a Vida...</h3>
                <img className='z-10 absolute w-[80px] pl-[20px] opacity-100 bottom-[10px] left-[90px]' src="public/assets/img/plane.svg" alt="Imagem de fundo na forma de um avião" />
            </div>

            <div className='z-10 w-full max-w-[600px] p-1 bg-amber-600 rounded-lg mx-auto esconder-scrollbar'>

                <div className='z-10 w-full overflow-scroll flex snap-x snap-mandatory esconder-scrollbar'>
                    <img className='z-10 snap-center w-[600px] largura-minima-padrao' src={src} alt="Fotografia da galeria" />
                </div>

                <div className='z-10 flex h-full'>
                    <div className='z-10 flex items-center gap-2 p-2 w-1/2  bg-gray-700 text-sky-100 font-normal'>
                        <img className='z-10 w-[25px] h-[30px]' src="public/assets/img/imagem.png" alt="Ícone de fotos" />
                        <p>{contadorDeImagems}/5</p>
                    </div>
                    <div className='z-10 w-full p-2'>
                        {
                            (() => {
                                switch(contadorDeImagems) {
                                    case "1":
                                        return <p className='z-10 font-medium italic'>Diversão para toda a família.</p>

                                    case "2":
                                        return <p className='z-10 font-medium italic'>Equipamento de ponta: aventura com segurança.</p>

                                    case "3":
                                        return <p className='z-10 font-medium italic'>Instrutores capacitados e parceiros.</p>

                                    case "4":
                                        return <p className='z-10 font-medium italic'>Os aviões mais seguros do mercado.</p>

                                    case "5":
                                        return <p className='z-10 font-medium italic'>Área de pouso segura e espaçosa.</p>
            
                                    default:
                                        return null;
                                    }
                            })()
                        }
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Galeria;
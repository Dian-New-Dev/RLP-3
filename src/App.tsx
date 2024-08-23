import React from 'react';
import Header from './Header'
import Hero from './Hero';
import Sobre from './Sobre';
import Modalidades from './Modalidades';
import Galeria from './Galeria';
import Depoimentos from './Depoimentos';
import Footer from './Footer';

const App: React.FC = () => {
    console.log('a confirmação')
    return (
        <div className='bg-gray-800 scroll-smooth'>
            <Header />

            <Hero />

            <div className='relative p-0 sm:p-8 lg:p-16 flex flex-col gap-8 lg:gap-16 w-full max-w-[1440px] mx-auto'>
                <div className='z-0 opacity-25 absolute top-0 left-0 w-full h-full blended-bg '></div>
                <Sobre />

                <Modalidades />

            </div>

            <div className='w-full h-full bg-galeria'>
                <div className='relative p-0 lg:p-16 w-full max-w-[1440px] mx-auto'>

                    <Galeria />

                    <Depoimentos />

                </div>
            </div>

            <Footer />
        </div>
    );
};

export default App;
import React from 'react';
import Header from './Header'
import Hero from './Hero';
import Sobre from './Sobre';
import Modalidades from './Modalidades';
import Galeria from './Galeria';
import Depoimentos from './Depoimentos';
import Footer from './Footer';

const App: React.FC = () => {
    return (
        <div className='bg-gray-800'>
            <Header />

            <Hero />

            <Sobre />

            <Modalidades />

            <div className='bg-galeria'>

                <Galeria />

                <Depoimentos />

            </div>

            <Footer />
        </div>
    );
};

export default App;
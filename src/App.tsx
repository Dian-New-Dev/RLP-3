import React from 'react';
import Header from './Header'
import Hero from './Hero';
import Sobre from './Sobre';

const App: React.FC = () => {
    return (
        <div>
            <Header />

            <Hero />

            <Sobre />

            {/* <Modalidades />

            <Galeria />

            <Depoimentos />

            <Footer /> */}
        </div>
    );
};

export default App;
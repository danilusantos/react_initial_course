import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';

export default function App() {
    const [colaboradores, setColaboradores] = useState([]);
    const aoNovoColaboradorAdicionado = (colaborador) => {
        console.log('Colaborador adicionado => ', colaborador);
        setColaboradores([...colaboradores, colaborador]);
    };

    return (
        <div className="App">
            <Banner />
            <Formulario aoColaboradorCadastrado={aoNovoColaboradorAdicionado} />
        </div>
    );
}

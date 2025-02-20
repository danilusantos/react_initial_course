import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';

export default function App() {
    const [colaboradores, setColaboradores] = useState([]);

    const aoNovoColaboradorAdicionado = (colaborador) => {
        setColaboradores([...colaboradores, colaborador]);
    };

    const times = [
        {
            key: 1,
            value: 'Red Canidis',
            corPrimaria: '#57C278',
            corSecundaria: '#D9F7E9',
        },
        {
            key: 2,
            value: 'Vivo Keyd',
            corPrimaria: '#82CFFA',
            corSecundaria: '#E8F8FF',
        },
        {
            key: 3,
            value: 'PAIN Gaming',
            corPrimaria: '#A6D157',
            corSecundaria: '#F0F8E2',
        },
        {
            key: 4,
            value: 'Flamengo eSports',
            corPrimaria: '#E06B69',
            corSecundaria: '#FDE7E8',
        },
    ];

    return (
        <div className="App">
            <Banner />
            <Formulario
                times={times}
                aoColaboradorCadastrado={aoNovoColaboradorAdicionado}
            />
            <section className="times">
                {times.map((time) => (
                    <Time
                        key={time.key}
                        nome={time.value}
                        corPrimaria={time.corPrimaria}
                        corSecundaria={time.corSecundaria}
                        colaboradores={colaboradores.filter(
                            (colaborador) => colaborador.time === time.value
                        )}
                    />
                ))}
            </section>
        </div>
    );
}

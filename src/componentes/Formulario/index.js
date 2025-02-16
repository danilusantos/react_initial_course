import { MdAddCircleOutline } from 'react-icons/md';
import './Formulario.css';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';
import { useState } from 'react';

const Formulario = () => {
    const times = [
        { key: '', value: 'Selecione' },
        { key: 1, value: 'Red Canidis' },
        { key: 2, value: 'Vivo Keyd' },
        { key: 3, value: 'PAIN Gaming' },
        { key: 4, value: 'Flamengo eSports' },
    ];

    const [nome, setNome] = useState('');
    const [rota, setRota] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');

    const aoSalvar = (event) => {
        event.preventDefault();
        console.log('Form foi submetido => ', { nome, rota, imagem, time });
    };

    return (
        <section className="Formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do campeão</h2>
                <CampoTexto
                    obrigatorio={true}
                    label="Nome do campeão"
                    placeholder="Digite o nome do campeão"
                    valor={nome}
                    aoAlterado={(valor) => setNome(valor)}
                />
                <CampoTexto
                    obrigatorio={true}
                    label="Rota"
                    placeholder="Digite sua rota"
                    valor={rota}
                    aoAlterado={(valor) => setRota(valor)}
                />
                <CampoTexto
                    label="Imagem"
                    placeholder="Digite o endereço da imagem"
                    valor={imagem}
                    aoAlterado={(valor) => setImagem(valor)}
                />
                <ListaSuspensa
                    obrigatorio={true}
                    label="Times"
                    itens={times}
                    valor={time}
                    aoAlterado={(valor) => setTime(valor)}
                />
                <Botao>
                    <p>
                        <MdAddCircleOutline size={30} />
                        <span>Criar card</span>
                    </p>
                </Botao>
            </form>
        </section>
    );
};

export default Formulario;

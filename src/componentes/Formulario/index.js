import PropTypes from 'prop-types';
import { MdAddCircleOutline } from 'react-icons/md';
import './Formulario.css';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';

const Formulario = () => {
    const times = [
        { key: '', value: 'Selecione' },
        { key: 1, value: 'Red Canidis' },
        { key: 2, value: 'Vivo Keyd' },
        { key: 3, value: 'PAIN Gaming' },
        { key: 4, value: 'Flamengo eSports' },
    ];

    const aoSalvar = (event) => {
        event.preventDefault();
        console.log('Form foi submetido');
    };

    return (
        <section className="Formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do campeão</h2>
                <CampoTexto
                    obrigatorio={true}
                    label="Nome do campeão"
                    placeholder="Digite o nome do campeão"
                />
                <CampoTexto
                    obrigatorio={true}
                    label="Rota"
                    placeholder="Digite sua rota"
                />
                <CampoTexto
                    label="Imagem"
                    placeholder="Digite o endereço da imagem"
                />
                <ListaSuspensa obrigatorio={true} label="Times" itens={times} />
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

Formulario.propTypes = {};

export default Formulario;

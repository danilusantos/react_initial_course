import PropTypes from 'prop-types';
import './Formulario.css';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';

const Formulario = () => {
    const times = [
        { key: 1, value: 'Red Canidis' },
        { key: 2, value: 'Vivo Keyd' },
        { key: 3, value: 'PAIN Gaming' },
        { key: 4, value: 'Flamengo eSports' },
    ];

    return (
        <section className="Formulario">
            <form>
                <h2>Preencha os dados para criar o card do campeão</h2>
                <CampoTexto
                    label="Nome do campeão"
                    placeholder="Digite o nome do campeão"
                />
                <CampoTexto label="Rota" placeholder="Digite sua rota" />
                <CampoTexto
                    label="Imagem"
                    placeholder="Digite o endereço da imagem"
                />
                <ListaSuspensa label="Times" itens={times} />
            </form>
        </section>
    );
};

Formulario.propTypes = {};

export default Formulario;

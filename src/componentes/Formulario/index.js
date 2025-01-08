import PropTypes from 'prop-types';
import './Formulario.css';
import CampoTexto from '../CampoTexto';

const Formulario = (props) => {
    return (
        <section className="Formulario">
            <form>
                <h2>Preencha os dados para criar o card do jogador</h2>
                <CampoTexto label="Nome" placeholder="Digite seu nome" />
                <CampoTexto label="Cargo" placeholder="Digite seu cargo" />
                <CampoTexto
                    label="Imagem"
                    placeholder="Digite o endereço da imagem"
                />
            </form>
        </section>
    );
};

Formulario.propTypes = {};

export default Formulario;

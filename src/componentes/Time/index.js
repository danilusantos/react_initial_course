import { PropTypes } from 'prop-types';
import './Time.css';

const Time = (props) => {
    return (
        <section
            key={props.key}
            style={{ backgroundColor: props.corSecundaria }}
            className="time"
        >
            <h2 style={{ borderBottomColor: props.corPrimaria }}>
                {props.nome}
            </h2>

            <ul>
                {props.colaboradores.map((colaborador) => (
                    <li key={colaborador.key}>{colaborador.nome}</li>
                ))}
            </ul>
        </section>
    );
};

Time.propTypes = {
    key: PropTypes.number,
    nome: PropTypes.string,
    corPrimaria: PropTypes.string,
    corSecundaria: PropTypes.string,
    colaboradores: PropTypes.array,
};

export default Time;

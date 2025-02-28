import { PropTypes } from 'prop-types';
import './Time.css';
import Colaborador from '../Colaborador';

const Time = (props) => {
    return (
        <section
            key={props.key}
            style={{ backgroundColor: props.corSecundaria }}
            className="Time"
        >
            <h2 style={{ borderBottomColor: props.corPrimaria }}>
                {props.nome}
            </h2>

            <ul className="colaboradores">
                {props.colaboradores.map((colaborador) => (
                    <li className="colaborador" key={colaborador.nome}>
                        <Colaborador
                            key={colaborador.nome}
                            nome={colaborador.nome}
                            imagem={colaborador.imagem}
                            corPrimaria={props.corPrimaria}
                            rota={colaborador.rota}
                        />
                    </li>
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

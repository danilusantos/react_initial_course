import { PropTypes } from 'prop-types';
import './Time.css';
import Colaborador from '../Colaborador';

const Time = ({ key, nome, corPrimaria, corSecundaria, colaboradores }) => {
    return (
        colaboradores.length > 0 && (
            <section
                key={nome + key}
                style={{ backgroundColor: corSecundaria }}
                className="Time"
            >
                <h2 style={{ borderBottomColor: corPrimaria }}>{nome}</h2>

                <ul className="colaboradores">
                    {colaboradores.map((colaborador) => (
                        <li className="colaborador" key={colaborador.nome}>
                            <Colaborador
                                key={colaborador.nome}
                                nome={colaborador.nome}
                                imagem={colaborador.imagem}
                                corPrimaria={corPrimaria}
                                rota={colaborador.rota}
                            />
                        </li>
                    ))}
                </ul>
            </section>
        )
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

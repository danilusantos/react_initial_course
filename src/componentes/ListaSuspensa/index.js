import PropTypes from 'prop-types';
import './ListaSuspensa.css';

const ListaSuspensa = (props) => {
    return (
        <div className="ListaSuspensa">
            <label>{props.label}</label>
            <select
                onChange={(evento) => props.aoAlterado(evento.target.value)}
                required={props.obrigatorio}
                value={props.valor}
            >
                {props.itens.map((item) => {
                    return <option key={item.key}>{item.value}</option>;
                })}
            </select>
        </div>
    );
};

ListaSuspensa.propTypes = {
    label: PropTypes.string.isRequired,
    itens: PropTypes.array,
    obrigatorio: PropTypes.bool,
    valor: PropTypes.string,
    aoAlterado: PropTypes.func,
};

export default ListaSuspensa;

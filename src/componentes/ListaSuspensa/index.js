import PropTypes from 'prop-types';
import './ListaSuspensa.css';

const ListaSuspensa = (props) => {
    return (
        <div className="ListaSuspensa">
            <label>{props.label}</label>
            <select>
                <option key="0">Selecione</option>
                {props.itens.map((item) => {
                    return <option key={item.value}>{item.value}</option>;
                })}
            </select>
        </div>
    );
};

ListaSuspensa.propTypes = {
    label: PropTypes.string.isRequired,
    itens: PropTypes.array,
};

export default ListaSuspensa;

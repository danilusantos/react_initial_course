import PropTypes from 'prop-types';
import './CampoTexto.css';
import { useState } from 'react';

const CampoTexto = (props) => {
    const label = props.label;
    const placeholder = props.placeholder;

    const [valor, setValor] = useState('Danilo Santos');

    const aoDigitar = (event) => {
        setValor(event.target.value);
    };

    return (
        <div className="campo-texto">
            <label>{label}</label>
            <input
                placeholder={placeholder}
                required={props.obrigatorio}
                onChange={aoDigitar}
                value={valor}
            />
        </div>
    );
};

CampoTexto.propTypes = {
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    obrigatorio: PropTypes.bool,
};

export default CampoTexto;

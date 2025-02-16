import PropTypes from 'prop-types';
import './CampoTexto.css';

const CampoTexto = (props) => {
    const label = props.label;
    const placeholder = props.placeholder;

    const aoDigitar = (event) => {
        props.aoAlterado(event.target.value);
    };

    return (
        <div className="campo-texto">
            <label>{label}</label>
            <input
                placeholder={placeholder}
                required={props.obrigatorio}
                onChange={aoDigitar}
                value={props.valor}
            />
        </div>
    );
};

CampoTexto.propTypes = {
    label: PropTypes.string.isRequired,
    valor: PropTypes.string,
    aoAlterado: PropTypes.func,
    placeholder: PropTypes.string,
    obrigatorio: PropTypes.bool,
};

export default CampoTexto;

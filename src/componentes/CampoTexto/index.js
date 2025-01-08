import PropTypes from 'prop-types';
import './CampoTexto.css';

const CampoTexto = (props) => {
    const label = props.label;
    const placeholder = props.placeholder;

    return (
        <div className="campo-texto">
            <label>{label}</label>
            <input placeholder={placeholder} />
        </div>
    );
};

CampoTexto.propTypes = {
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
};

export default CampoTexto;

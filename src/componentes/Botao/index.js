import PropTypes from 'prop-types';
import './Botao.css';

const Botao = (props) => {
    return <button className="Botao">{props.children}</button>;
};

Botao.propTypes = {
    children: PropTypes.any,
};

export default Botao;

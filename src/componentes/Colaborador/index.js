import PropTypes from 'prop-types';
import './Colaborador.css';

const Colaborador = ({ nome, imagem, rota, corPrimaria }) => {
    return (
        <article className="Colaborador">
            <header
                className="cabecalho"
                style={{ backgroundColor: corPrimaria }}
            >
                <img src={imagem} alt={nome} />
            </header>
            <div className="rodape">
                <h4>{nome}</h4>
                <h5>{rota}</h5>
            </div>
        </article>
    );
};

Colaborador.propTypes = {
    nome: PropTypes.string,
    imagem: PropTypes.string,
    rota: PropTypes.string,
    corPrimaria: PropTypes.string,
};

export default Colaborador;

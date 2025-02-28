import './Rodape.css';

const Rodape = () => {
    return (
        <footer className="Rodape">
            <div className="redes-sociais">
                <ul>
                    <li>
                        <a href="#" target="_blank" rel="noreferrer">
                            <img
                                src="/imagens/fb.png"
                                alt="Facebook Danilo Santos"
                            />
                        </a>
                    </li>
                    <li>
                        <a href="#" target="_blank" rel="noreferrer">
                            <img
                                src="/imagens/ig.png"
                                alt="Instagram Danilo Santos"
                            />
                        </a>
                    </li>
                    <li>
                        <a href="#" target="_blank" rel="noreferrer">
                            <img
                                src="/imagens/tw.png"
                                alt="Twitter Danilo Santos"
                            />
                        </a>
                    </li>
                </ul>
            </div>
            <div className="logo">
                <img src="/imagens/logo.png" alt="Logo Organo" />
            </div>
            <div className="creditos">
                <p>
                    Desenvolvido por{' '}
                    <a
                        href="https://www.linkedin.com/in/danilusantos/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Danilo Santos
                    </a>
                </p>
            </div>
        </footer>
    );
};

export default Rodape;

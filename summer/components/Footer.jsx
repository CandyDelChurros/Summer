import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareFacebook } from '@fortawesome/free-solid-svg-icons';
import { faSquareInstagram } from '@fortawesome/free-solid-svg-icons';
import { faSquareXTwitter } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <footer>
            <div>
                <ol> <span>Atendimento</span>
                    <li><span>Central de Ajuda</span></li>
                    <li><span>Central de Ajuda</span></li>
                    <li><span>Central de Ajuda</span></li>
                    <li><span>Central de Ajuda</span></li>
                </ol>
            </div>
            <div>
                <ol> <span>Passagens</span>
                    <li></li>
                </ol>
            </div>
            <div>
                <ol> <span>Seja Nosso Parceiro</span>
                    <li></li>
                </ol>
            </div>
            <div>
                <div> 
                    <ol>
                        <li><span>© 2025 Summer Paradice</span></li>
                        <li><span> Privacidade </span></li>
                        <li><span> Termos </span></li>
                    </ol>
                </div>
                <div> 
                    <ol>
                        <li><span> <FontAwesomeIcon icon="fa-solid fa-globe" /> Portugues </span></li>
                        <li><span> R$ BRL </span></li>
                        <li><span> <FontAwesomeIcon icon={faSquareFacebook} /> </span></li>
                        <li><span> <FontAwesomeIcon icon={faSquareInstagram} /> </span></li>
                        <li><span> <FontAwesomeIcon icon={faSquareXTwitter} /> </span></li>
                    </ol>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
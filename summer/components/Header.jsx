import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <header>
            <div></div>
            <div>
                <button>Acomodações</button>
                <button>Viagens</button>
                <button>Experiências</button>
            </div>
            <div>
                <button><FontAwesomeIcon icon={faCircleUser} /></button>
                <button><FontAwesomeIcon icon={faCircleInfo} /></button>
            </div>
        </header>
    )
}

export default Header;
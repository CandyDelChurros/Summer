import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faPlaneDeparture } from '@fortawesome/free-solid-svg-icons';
import { faBellConcierge } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <header>
            <div></div>
            <div>
                <button><FontAwesomeIcon icon={faHouse} /> Acomodações</button>
                <button><FontAwesomeIcon icon={faPlaneDeparture} /> Viagens</button>
                <button><FontAwesomeIcon icon={faBellConcierge} /> Experiências</button>
            </div>
            <div>
                <button><FontAwesomeIcon icon={faCircleUser} /></button>
                <button><FontAwesomeIcon icon={faCircleInfo} /></button>
            </div>
        </header>
    )
}

export default Header;
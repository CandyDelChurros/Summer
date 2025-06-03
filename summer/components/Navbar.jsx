const Navbar = () => {
    return (
        <nav>
            <div>
                <div>
                    <label htmlFor="text">Onde</label>
                    <input type="text" placeholder="Para onde vamos ?" />
                </div>
                <div>
                    <label htmlFor="text">Check-In</label>
                    <input type="text" placeholder="Que dia vamos ?" />
                </div>
                <div>
                    <label htmlFor="text">Check-Out</label>
                    <input type="text" placeholder="Quando vamos embora ?" />
                </div>
                <div>
                    <label htmlFor="text">Quantas Pessoas</label>
                    <input type="text" placeholder="Em quantos vamos ?" />
                    <button>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                    <span>Buscar</span>
                    </button>
                </div>
            </div>
        </nav>
    )

}
import Map from "../CarParkMap/CarParkMap";

function Release() {
    return (
        <div className="book">
            <Map />
            
            <form className="book__form">

                <div className="book__form__group">
                    <label className="book__form__group__label" htmlFor="phone">Téléphone</label>
                    <input className="book__form__group__input" type="text" />
                </div>

                <div className="book__form__group">
                    <label className="book__form__group__label" htmlFor="numberPlace">Numéro du ticket</label>
                    <input className="book__form__group__input" type="number" />
                </div>
                <button>Libérer</button>
            </form>
        </div>
    );
}

export default Release;
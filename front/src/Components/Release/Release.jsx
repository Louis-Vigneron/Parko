import Map from "../CarParkMap/CarParkMap";

function Release() {
    return (
        <div className="book">
            <div className="book__map">
            <Map />
            </div>
            <form className="book__form">

                <div className="book__form__group">
                    <label className="book__form__group__label" htmlFor="phone">Téléphone</label>
                    <input className="book__form__group__input" type="text" />
                </div>

                <div className="book__form__group">
                    <label className="book__form__group__label" htmlFor="numberPlace">Numéro du ticket</label>
                    <input className="book__form__group__input" type="number" />
                </div>

                <div className="book__form__group">
                    <label className="book__form__group__label" htmlFor="numberplate">Plaque d'immatriculation</label>
                    <input className="book__form__group__input" type="text" />
                </div>
                
                <button className="book__form__button">Libérer</button>
            </form>
        </div>
    );
}

export default Release;
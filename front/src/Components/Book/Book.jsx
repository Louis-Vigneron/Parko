import Map from "../CarParkMap/CarParkMap";

function Book() {
    return (
        <div className="book">
            <Map/>
            <form className="book__form">
                <div className="book__form__group">
                    <label className="book__form__group__label" htmlFor="firstName">Prénom</label>
                    <input className="book__form__group__input" type="text" />
                </div>
                <div className="book__form__group">
                    <label className="book__form__group__label" htmlFor="lastName">Nom</label>
                    <input className="book__form__group__input" type="text" />
                </div>
                <div className="book__form__group">
                    <label className="book__form__group__label" htmlFor="phone">Téléphone</label>
                    <input className="book__form__group__input" type="text" />
                </div>
                <div className="book__form__group">
                    <label className="book__form__group__label" htmlFor="mail">E-mail</label>
                    <input className="book__form__group__input" type="mail" />
                </div>
                <div className="book__form__group">
                    <label className="book__form__group__label" htmlFor="numberPlace">Numéro de la place</label>
                    <input className="book__form__group__input" type="number" />
                </div>
                <button>Réserver</button>
            </form>
        </div>
    );
}

export default Book;
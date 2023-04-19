import Map from "../CarParkMap/CarParkMap";

function Book() {
    return (
        <div className="book">
            <div className="book__map">
                <Map />
            </div>
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
                    <label className="book__form__group__label" htmlFor="model">Modèle de voiture</label>
                    <input className="book__form__group__input" type="text" />
                </div> 
                <div className="book__form__group">
                    <label className="book__form__group__label" htmlFor="mail">E-mail</label>
                    <input className="book__form__group__input" type="mail" />
                </div>
                <div className="book__form__group">
                    <label className="book__form__group__label" htmlFor="numberplate">Plaque d'immatriculation</label>
                    <input className="book__form__group__input" type="text" />
                </div>
               
                <div className="book__form__group">
                    <label className="book__form__group__label" htmlFor="numberPlace">Numéro de la place</label>
                    <input className="book__form__group__input" type="number" />
                </div>
                <button className="book__form__button">Réserver</button>
            </form>
        </div>
    );
}

export default Book;
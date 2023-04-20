import Map from "../CarParkMap/CarParkMap";
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchPlaces } from '../Redux/action';
import axios from "axios";
import { Link } from "react-router-dom"

let regexFirstName = /^([A-Za-z]{3,20})?([-]{0,1})?([A-Za-z]{3,20})$/;
let regexLastName = /^[A-Za-z]{3,20}$/;
let regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
let regexPhone = /^[0-9]{10}/;
let regexPlate = /^([A-Z0-9]{2})?([-]{1})?([A-Z0-9]{3})?([-]{1})?([A-Z0-9]{2})/;

function validate(champ, regex) {
    return regex.test(champ);
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

const Book = ({ fetchPlaces, places }) => {
    useEffect(() => {
        fetchPlaces();
    }, []);
    const [userFormData, setUserFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        mail: '',
        numberplate: '',
        numberticket: getRandomInt(1, 10000),
        numberPlace: '',

    });

    const handleSubmit = async (event) => {

        event.preventDefault();

        const isValidFirstName = validate(userFormData.firstName, regexFirstName);
        const isValidLastName = validate(userFormData.lastName, regexLastName);
        const isValidPhone = validate(userFormData.phone, regexPhone);
        const isValidMail = validate(userFormData.mail, regexEmail);
        const isValidPlate = validate(userFormData.numberplate, regexPlate);

        if (isValidFirstName && isValidLastName && isValidPhone && isValidMail && isValidPlate) {

            try {
                await axios.post("http://localhost:4200/users", userFormData);
                let place = +userFormData.numberPlace
                const placeId = places.filter(p => (p.numberPlace === place));
                const placeToUpdate = { available: false };
                await axios.patch(`http://localhost:4200/places/${placeId[0]._id}`, placeToUpdate);
                window.location.href = `/ConfirmationRéservation/?ticket=${userFormData.numberticket}&name=${userFormData.firstName}&place=${userFormData.numberPlace}`

            } catch (error) {
                console.error("Error :", error);
            }
        } else {
            alert('Un ou plusieurs champs ne sont pas renseignés correctement')
        }

    };

    const handleUserChange = (event) => {
        const { name, value } = event.target;
        setUserFormData({ ...userFormData, [name]: value });
    };

    return (
        <div className="request">
            <div className="request__map">
                <Map />
            </div>
            <form className="request__form" onSubmit={handleSubmit}>
                <div className="request__form__group">
                    <label className="request__form__group__label" htmlFor="firstName" >Prénom</label>
                    <input className="request__form__group__input" type="text" placeholder="Jean" onChange={handleUserChange} value={userFormData.firstName} name="firstName" />
                </div>
                <div className="request__form__group">
                    <label className="request__form__group__label" htmlFor="lastName">Nom</label>
                    <input className="request__form__group__input" type="text" placeholder="Dupont" onChange={handleUserChange} value={userFormData.lastName} name="lastName" />
                </div>
                <div className="request__form__group">
                    <label className="request__form__group__label" htmlFor="phone">Téléphone</label>
                    <input className="request__form__group__input" type="text" placeholder="0123456789" onChange={handleUserChange} value={userFormData.phone} name="phone" />
                </div>

                <div className="request__form__group">
                    <label className="request__form__group__label" htmlFor="mail">E-mail</label>
                    <input className="request__form__group__input" type="mail" placeholder="jeanmineur@mail.fr" onChange={handleUserChange} value={userFormData.mail} name="mail" />
                </div>

                <div className="request__form__group">
                    <label className="request__form__group__label" htmlFor="numberplate">Plaque d'immatriculation</label>
                    <input className="request__form__group__input" type="text" placeholder="00-ABC-00" onChange={handleUserChange} value={userFormData.numberplate} name="numberplate" />
                </div>
                <div className="request__form__group">
                    <label className="request__form__group__label" htmlFor="numberPlace">Numéro de la place</label>

                    <select name="numberPlace" onChange={handleUserChange} value={userFormData.numberPlace}>
                        <option className="request__form__group__input" type="number" >Sélectionner votre place</option>
                        {places.map((el) => {
                            if (el.available === true) {
                                return <option className="request__form__group__input" key={el._id} type="number" >{el.numberPlace}</option>
                            }
                        }
                        )}
                    </select>
                </div>
                <button to="/Confirmation" className="request__form__button" onClick={handleSubmit}>Réserver</button>
            </form>

        </div>
    );
}

const mapStateToProps = (state) => ({
    places: state.places,
});

export default connect(mapStateToProps, { fetchPlaces })(Book);

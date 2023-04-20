import Map from "../CarParkMap/CarParkMap";
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchPlaces } from '../Redux/action';
import axios from "axios";

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
        numberticket: getRandomInt(1,10000),
        numberPlace: '',
       
    });

    const handleSubmit = async (event) => {
        event.preventDefault();
               console.log(userFormData)
        try {
            const responseUser = await axios.post("http://localhost:4200/users", userFormData);
            console.log("User created:", responseUser.data);
            let place = +userFormData.numberPlace
            const placeId = places.filter(p => (p.numberPlace === place)) ; 
            const placeToUpdate = { available: false };
            await axios.patch(`http://localhost:4200/places/${placeId[0]._id}`, placeToUpdate);
            console.log(`Place ${placeId[0]._id} updated.`);

        } catch (error) {
            console.error("Error :", error);
        }
    };
    const handleUserChange = (event) => {
        const { name, value } = event.target;
        setUserFormData({ ...userFormData, [name]: value });
    };

    return (
        <div className="book">
            <div className="book__map">
                <Map />
            </div>
            <form className="book__form" onSubmit={handleSubmit}>
                <div className="book__form__group">
                    <label className="book__form__group__label" htmlFor="firstName" >Prénom</label>
                    <input className="book__form__group__input" type="text" onChange={handleUserChange} value={userFormData.firstName} name="firstName" />
                </div>
                <div className="book__form__group">
                    <label className="book__form__group__label" htmlFor="lastName">Nom</label>
                    <input className="book__form__group__input" type="text" onChange={handleUserChange} value={userFormData.lastName} name="lastName" />
                </div>
                <div className="book__form__group">
                    <label className="book__form__group__label" htmlFor="phone">Téléphone</label>
                    <input className="book__form__group__input" type="text" onChange={handleUserChange} value={userFormData.phone} name="phone" />
                </div>

                <div className="book__form__group">
                    <label className="book__form__group__label" htmlFor="mail">E-mail</label>
                    <input className="book__form__group__input" type="mail" onChange={handleUserChange} value={userFormData.mail} name="mail" />
                </div>

                <div className="book__form__group">
                    <label className="book__form__group__label" htmlFor="numberplate">Plaque d'immatriculation</label>
                    <input className="book__form__group__input" type="text" onChange={handleUserChange} value={userFormData.numberplate} name="numberplate" />
                </div>
                <div className="book__form__group">
                    <label className="book__form__group__label" htmlFor="numberPlace">Numéro de la place</label>                    
                    
                    <select name="numberPlace" onChange={handleUserChange} value={userFormData.numberPlace}>
                        <option className="book__form__group__input" type="number" >Sélectionner votre place</option>
                        {places.map((el) => {
                            if (el.available === true) {
                                return <option className="book__form__group__input" key={el._id} type="number" >{el.numberPlace}</option>
                            }
                        }
                        )}
                    </select>
                </div>
                <button className="book__form__button" onClick={handleSubmit}>Réserver</button>
            </form>
            
        </div>
    );
}

const mapStateToProps = (state) => ({
    places: state.places,
});

export default connect(mapStateToProps, { fetchPlaces })(Book);

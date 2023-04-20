import Map from "../CarParkMap/CarParkMap";
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchPlaces } from '../Redux/action';
import axios from "axios";

const Release = ({ fetchPlaces, places }) => {
    useEffect(() => {
        fetchPlaces();
    }, []);

    const [releaseFormData, setReleaseFormData] = useState({
        phone: '',
        numberplate: '',
        numberPlace: '',

    });

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(releaseFormData)
        try {

            axios.get('http://localhost:4200/users')
                .then(function (response) {
                    console.log(response.data);
                    const users = response.data
                    const userId = users.filter(a => (a.numberPlace === +releaseFormData.numberPlace && a.numberplate === releaseFormData.numberplate && a.phone === releaseFormData.phone));
                    console.log(userId)
                    if (userId[0]._id) {
                        axios.delete(`http://localhost:4200/users/${userId[0]._id}`);
                        console.log("User deleated:", userId[0]._id);
                        let place = +releaseFormData.numberPlace
                        const placeId = places.filter(p => (p.numberPlace === place));
                        const placeToUpdate = { available: true };
                        axios.patch(`http://localhost:4200/places/${placeId[0]._id}`, placeToUpdate);
                        console.log(`Place ${placeId[0]._id} updated.`); 
                    }
                })
                .catch(function (error) {
                    console.log(error);
                })
                .finally(function () {
                });
        } catch (error) {
            console.error("Error :", error);
        }
    };
    const handleUserChange = (event) => {
        const { name, value } = event.target;
        setReleaseFormData({ ...releaseFormData, [name]: value });
    };

    return (
        <div className="book">
            <div className="book__map">
                <Map />
            </div>
            <form className="book__form" onSubmit={handleSubmit}>

                <div className="book__form__group">
                    <label className="book__form__group__label" htmlFor="phone">Téléphone</label>
                    <input className="book__form__group__input" type="text" onChange={handleUserChange} value={releaseFormData.phone} name="phone" />
                </div>

                <div className="book__form__group">
                    <label className="book__form__group__label" htmlFor="numberplate">Plaque d'immatriculation</label>
                    <input className="book__form__group__input" type="text" onChange={handleUserChange} value={releaseFormData.numberplate} name="numberplate" />
                </div>

                <div className="book__form__group">
                    <label className="book__form__group__label" htmlFor="numberPlace">Numéro de la place à libérer</label>
                    <select name="numberPlace" onChange={handleUserChange} value={releaseFormData.numberPlace}>
                        <option className="book__form__group__input" type="number" >Sélectionner votre place</option>
                        {places.map((el) => {
                            if (el.available === false) {
                                return <option className="book__form__group__input" key={el._id} type="number" >{el.numberPlace}</option>
                            }
                        }
                        )}
                    </select>
                </div>

                <button className="book__form__button" onClick={handleSubmit}>Libérer</button>
            </form>

        </div>
    );
}

const mapStateToProps = (state) => ({
    places: state.places,
});

export default connect(mapStateToProps, { fetchPlaces })(Release);

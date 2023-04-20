import Map from "../CarParkMap/CarParkMap";
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchPlaces } from '../Redux/action';
import axios from "axios";

let regexPhone = /^[0-9]{10}/;
let regexPlate = /^([A-Z0-9]{2})?([-]{1})?([A-Z0-9]{3})?([-]{1})?([A-Z0-9]{2})/;

function validate(champ, regex) {
    return regex.test(champ);
}

const Release = ({ fetchPlaces, places }) => {
    useEffect(() => {
        fetchPlaces();
    }, []);

    const [releaseFormData, setReleaseFormData] = useState({
        phone: '',
        numberplate: '',
        numberPlace: '',

    });

    const isValidPhone = validate(releaseFormData.phone, regexPhone);
    const isValidPlate = validate(releaseFormData.numberplate, regexPlate);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (isValidPhone && isValidPlate) {
            try {
                axios.get('http://localhost:4200/users')
                    .then(function (response) {
                        const users = response.data
                        const userId = users.filter(a => (a.numberPlace === +releaseFormData.numberPlace && a.numberplate === releaseFormData.numberplate && a.phone === releaseFormData.phone));
                        
                        if (userId[0] !== undefined) {
                            axios.delete(`http://localhost:4200/users/${userId[0]._id}`);
                            let place = +releaseFormData.numberPlace
                            const placeId = places.filter(p => (p.numberPlace === place));
                            const placeToUpdate = { available: true };
                            axios.patch(`http://localhost:4200/places/${placeId[0]._id}`, placeToUpdate);
                            console.log(`Place ${placeId[0]._id} updated.`);
                            window.location.href = `/ConfirmationLibération/?name=${userId[0].firstName}`

                        } else {
                            alert("Un champ renseigné est incorrect")
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
        } else {
            alert('Un ou plusieurs champs ne sont pas renseignés correctement')
        }

    };
    const handleUserChange = (event) => {
        const { name, value } = event.target;
        setReleaseFormData({ ...releaseFormData, [name]: value });
    };

    return (
        <div className="request">
            <div className="request__map">
                <Map />
            </div>
            <form className="request__form" onSubmit={handleSubmit}>

                <div className="request__form__group">
                    <label className="request__form__group__label" htmlFor="phone">Téléphone</label>
                    <input className="request__form__group__input" placeholder="0123456789" type="text" onChange={handleUserChange} value={releaseFormData.phone} name="phone" />
                </div>

                <div className="request__form__group">
                    <label className="request__form__group__label" htmlFor="numberplate">Plaque d'immatriculation</label>
                    <input className="request__form__group__input" placeholder="00-ABC-00" type="text" onChange={handleUserChange} value={releaseFormData.numberplate} name="numberplate" />
                </div>

                <div className="request__form__group">
                    <label className="request__form__group__label" htmlFor="numberPlace">Numéro de la place à libérer</label>
                    <select name="numberPlace" onChange={handleUserChange} value={releaseFormData.numberPlace}>
                        <option className="request__form__group__input" type="number" >Sélectionner votre place</option>
                        {places.map((el) => {
                            if (el.available === false) {
                                return <option className="request__form__group__input" key={el._id} type="number" >{el.numberPlace}</option>
                            }
                        }
                        )}
                    </select>
                </div>

                <button className="request__form__button" onClick={handleSubmit}>Libérer</button>
            </form>

        </div>
    );
}

const mapStateToProps = (state) => ({
    places: state.places,
});

export default connect(mapStateToProps, { fetchPlaces })(Release);

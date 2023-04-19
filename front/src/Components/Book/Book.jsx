import Map from "../CarParkMap/CarParkMap";
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchPlaces } from '../Redux/action';
import axios from "axios";

const Book = ({ fetchPlaces, places }) => {
    useEffect(() => {
        fetchPlaces();
    }, []);

    const [userFormData, setUserFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        mail: '',
    });

    const [carFormData, setCarFormData] = useState({
        model: '',
        numberplate: '',
    });

    const [ticketFormData, setTicketFormData] = useState({
        numberPlace: '1',
    });

    const handleSubmit = async (event) => {
        event.preventDefault();
     
        try {
            const responseCar = await axios.post("http://localhost:4200/cars", carFormData);
            console.log("Car created:", responseCar.data);
            const responseUser = await axios.post("http://localhost:4200/users", userFormData);
            console.log("User created:", responseUser.data);     
            const responseTicket = await axios.post("http://localhost:4200/tickets", ticketFormData);
            console.log("Tickets created:", responseTicket.data);       
        } catch (error) {
            console.error("Error :", error);
        }
    };
    const handleUserChange = (event) => {
        const { name, value } = event.target;
        setUserFormData({ ...userFormData, [name]: value });
    };
    const handleCarChange = (event) => {
        const { name, value } = event.target;
        setCarFormData({ ...carFormData, [name]: value });
    };
    const handleTicketChange = (event) => {
        const { name, value } = event.target;
        setTicketFormData({ ...ticketFormData, [name]: value });
    };
    return (
        <div className="book">
            <div className="book__map">
                <Map />
            </div>
            <form className="book__form" onSubmit={handleSubmit}>
                <div className="book__form__group">
                    <label className="book__form__group__label" htmlFor="firstName" >Prénom</label>
                    <input className="book__form__group__input" type="text" onChange={handleUserChange} value={userFormData.firstName} name="firstName"/>
                </div>
                <div className="book__form__group">
                    <label className="book__form__group__label" htmlFor="lastName">Nom</label>
                    <input className="book__form__group__input" type="text" onChange={handleUserChange} value={userFormData.lastName} name="lastName" />
                </div>
                <div className="book__form__group">
                    <label className="book__form__group__label" htmlFor="phone">Téléphone</label>
                    <input className="book__form__group__input" type="text" onChange={handleUserChange}value={userFormData.phone}  name="phone"/>
                </div>
             
                <div className="book__form__group">
                    <label className="book__form__group__label" htmlFor="mail">E-mail</label>
                    <input className="book__form__group__input" type="mail"  onChange={handleUserChange} value={userFormData.mail} name="mail"/>
                </div>
               

                <div className="book__form__group">
                    <label className="book__form__group__label" htmlFor="numberPlace">Numéro de la place</label>
                    <select name="numberPlace" onChange={handleTicketChange} >
                        {places.map((el) => {
                            if (el.available === true) {
                                return <option className="book__form__group__input" key={el._id} type="number" >{el.numberPlace}</option>
                            }
                        }
                        )}
                    </select>
                </div>
                
            </form> 
            <form className="book__form" onSubmit={handleSubmit}>
                
                <div className="book__form__group">
                    <label className="book__form__group__label" htmlFor="model">Modèle de voiture</label>
                    <input className="book__form__group__input" type="text" onChange={handleCarChange} name="model"/>
                </div>
              
                <div className="book__form__group">
                    <label className="book__form__group__label" htmlFor="numberplate">Plaque d'immatriculation</label>
                    <input className="book__form__group__input" type="text" onChange={handleCarChange} name="numberplate"/>
                </div>              
                
            </form>
            <button className="book__form__button" onClick={handleSubmit}>Réserver</button>
        </div>
    );
}

const mapStateToProps = (state) => ({
    places: state.places,
});

export default connect(mapStateToProps, { fetchPlaces })(Book);

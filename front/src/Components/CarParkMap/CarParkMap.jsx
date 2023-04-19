import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPlaces } from '../Redux/action';

const CarParkMap = ({ fetchPlaces, places }) => {
  useEffect(() => {
    fetchPlaces();
  }, []);
  return (
    <div className="map">
      <h2 className="map__title">Les places disponibles</h2>
      <div className="map__box">
        {places.map((el) =>
          <div className={`map__box__place map__box__place--${el.available}`} key={el._id}>{el.numberPlace}</div>
        )}
      </div>
      <div className='map__legend'>
        <p className='map__legend__text map__legend__text--available'>Place disponble</p>
        <p className='map__legend__text'>Place occupée</p>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  places: state.places,
});

export default connect(mapStateToProps, { fetchPlaces })(CarParkMap);

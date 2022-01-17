import React from 'react';
import '../styles/Offers.scss';
import {carsAPI} from './api/data'
import { useLocation } from 'react-router-dom';

const Offers = () => {

  const location = useLocation(); 
  const stateOfCar = location.state.current
  const conditCar = carsAPI.filter(car => car.condition.toLowerCase() === stateOfCar)

  const displayCars = conditCar.map(car => (
    <div className='item-wrapper' key={conditCar.indexOf(car)}>
      <div className='image'>
        <img src={car.picture} alt="" />
      </div>
      <div className='wrap-right'>
        <h2>{car.name}</h2>          
        <div className='stats'>
          <p>Condition: {car.condition}</p>
          <p>Year: {car.year}</p>
          <p>Mileage: {car.mileage} km</p>
          <p>Power: {car.power} HP</p>
          <p>Engine: {car.engine}</p>
          <p>Fuel Type: {car.fuelType}</p>
          <p>Body Type: {car.bodyType}</p>
          <p>Doors num.: {car.doorsNum}</p>
        </div>
        <div className='stats-bottom'>
          <h2>{car.price} zł</h2>
          <button className='btn-addToCart'>Add to cart</button>
        </div>
      </div>
    </div>
  ))

  return ( 
    <div>
      {displayCars}
    </div>
   );
}
 
export default Offers;
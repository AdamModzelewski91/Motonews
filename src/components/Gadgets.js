import React from 'react';
import "../styles/Gadgets.scss"
import { gadgetsAPI } from './api/data';
import { useLocation } from 'react-router-dom';

const Gadgets = () => {

  const location = useLocation();
  const stateOfGadgets = location.state.current;
  const conditGadgets = gadgetsAPI.filter(gadget => gadget.gadget.toLowerCase() === stateOfGadgets)

  const gadgetsList = conditGadgets.map(gadget => (
    <div className='item-wrapper' key={conditGadgets.indexOf(gadget)}>
      <div className="image img_desc">
        <img src={gadget.picture} alt="" />
      </div>
      <div className="wrap-right">
        <h1>{gadget.name}</h1>
        <div className="description">
          <p>{gadget.description}</p>
        </div>
        <div className="stats-bottom">
          <h2>{gadget.price} zł</h2>
          <button className='btn-addToCart'>Add to cart</button>
        </div>
      </div>
    </div>
  ))

  return ( 
    <div>
      {gadgetsList}
    </div>
   );
}
 
export default Gadgets;
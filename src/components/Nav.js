import React, { useState } from 'react';
import '../styles/Nav.scss'
import PanelAdmin from './PanelAdmin';

const Nav = () => {
  
const [visOffersItems, setVisOffersItems] = useState(false)
const [visGadetsItems, setVisGadetsItems] = useState(false)
const [loginPanel, setLoginPanel] = useState(false)
const [isLogged, setIsLogged] = useState(false)
const [loggedUser, setLoggedUser] = useState('')


  return ( 
    <nav>
      <div className='logo'>
        <h1>motonews</h1>
        <div className='gear'></div>
      </div>
      <div className='navbar'>
        <ul className='navlist'>
          <li className='navlist-main'>news</li>
          <li className='navlist-main' onClick={() => setVisOffersItems(prev => !prev)}>offers 
            <i className="fas fa-chevron-up" style={ visOffersItems ? { transform: "rotate(180deg)" } : {}}></i>
            {visOffersItems ?
            <ul className='navlist-drop'>
              <li>new</li>
              <li>used</li>
            </ul>: null}
          </li>
          <li className='navlist-main' onClick={() => setVisGadetsItems(prev => !prev)}>gadgets 
            <i className="fas fa-chevron-up" style={ visGadetsItems ? { transform: "rotate(180deg)" } : {}}></i>
            {visGadetsItems ? 
            <ul className='navlist-drop'>
              <li>paints</li>
              <li>cleaning</li>
              <li>fixing</li>
            </ul> : null}
          </li>
        </ul>
        <div className='user' onClick={()=> setLoginPanel(prev => !prev)}>        
          <p>{isLogged ? "Account" : "login"}</p>        
          <i className="fas fa-user"></i>
        </div>      
      </div>
      {loginPanel ? 
      <PanelAdmin 
        setLoginPanel = {setLoginPanel}  
        setIsLogged = {setIsLogged}
        isLogged= {isLogged}
        setLoggedUser= {setLoggedUser}
        loggedUser={loggedUser}
      /> : null}
    </nav>
   );
}
 
export default Nav;

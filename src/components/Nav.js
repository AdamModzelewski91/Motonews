import React, { useRef, useState } from 'react';
import '../styles/Nav.scss'
import PanelAdmin from './PanelAdmin';
import { NavLink } from 'react-router-dom';


const Nav = () => {
  
const [visOffersItems, setVisOffersItems] = useState(false)
const [visGadetsItems, setVisGadetsItems] = useState(false)
const [loginPanel, setLoginPanel] = useState(false)
const [isLogged, setIsLogged] = useState(false)
const [loggedUser, setLoggedUser] = useState('')
const currentCondition = useRef('')

const moveToNews = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const scrollDown = () => {
  moveToNews(500).then(() => { 
    const artHeight = window.document.getElementsByClassName('articles')[0].offsetTop  
    window.scrollBy({top: artHeight, behavior: 'smooth'})
   });
} 

  return ( 
    <nav>
      <div className='logo'>
        <h1><NavLink to="">motonews</NavLink></h1>
        <div className='gear'></div>
      </div>
      <div className='navbar'>
        <ul className='navlist'>
          <li className='navlist-main' onClick={scrollDown}><NavLink to="/news">news</NavLink></li>
          <li className='navlist-main' onClick={() => setVisOffersItems(prev => !prev)}>offers 
            <i className="fas fa-chevron-up" style={ visOffersItems ? { transform: "rotate(180deg)" } : {}}></i>
            {visOffersItems ?
            <ul className='navlist-drop'>
              <li><NavLink 
                onClick={()=> {currentCondition.current = 'new'}} 
                state={currentCondition} 
                to="/new">new
              </NavLink></li>
              <li><NavLink 
                onClick={()=> {currentCondition.current = 'used'}} 
                state={currentCondition} 
                to="/used">used
              </NavLink></li>
            </ul>: null}
          </li>
          <li className='navlist-main' onClick={() => setVisGadetsItems(prev => !prev)}>gadgets 
            <i className="fas fa-chevron-up" style={ visGadetsItems ? { transform: "rotate(180deg)" } : {}}></i>
            {visGadetsItems ? 
            <ul className='navlist-drop'>
              <li><NavLink 
                onClick={()=> {currentCondition.current = 'paints'}} 
                state={currentCondition} 
                to="/paints">paints
              </NavLink></li>
              <li><NavLink 
                onClick={()=> {currentCondition.current = 'cleaning'}} 
                state={currentCondition} 
                to="/cleaning">cleaning
              </NavLink></li>
              <li><NavLink 
                onClick={()=> {currentCondition.current = 'fixing'}} 
                state={currentCondition} 
                to="/fixing">fixing
              </NavLink></li>
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

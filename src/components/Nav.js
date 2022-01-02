import React from 'react';
import '../styles/Nav.scss'
const Nav = () => {



  return ( 
    <nav>
      <div className='logo'>
        <h1>motonews</h1>
        <div className='gear'></div>
      </div>
      <div className='navbar'>
        <ul>
          <ul>news</ul>
          <ul>offers <i className="fas fa-chevron-up"></i>
            <li>new</li>
            <li>used</li>
          </ul>
          <ul>gadets <i className="fas fa-chevron-up"></i>
            <li>paints</li>
            <li>cleaning</li>
            <li>fixing</li>
          </ul>
        </ul>
      </div>
      <div className='user'>        
        <p>login</p>        
        <i className="fas fa-user"></i>
      </div>      
      <div className='loginPanel'>
        <form id="isForm">
          <label>
            <input 
              name='login'
              placeholder='login'
              type="text" 
              // value={inputLogin}
            />
          </label>
          <label>
            <input 
              name='password'
              placeholder='password'
              type="text" 
              // value={inputLogin}
            />
          </label>
          <input 
            type="submit"
            value='login' 
          />
          <button>reginster</button>
          <p><span>-</span> OR <span>-</span></p>
          <button>
            <i>logo</i>
            <p>contine with google</p>
          </button>
        </form>
      </div>
    </nav>
   );
}
 
export default Nav;

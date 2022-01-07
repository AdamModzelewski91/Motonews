import React, { useState } from 'react';
import '../styles/PanelAdmin.scss'

const PanelAdmin = ({setLoginPanel}) => {

  const [inputLogin, setInputLogin] = useState('')
  const [inputPassword, setPassword] = useState('')

  const signIn = (e) => {
    e.preventDefault()
  } 

  const reginsterAcc = (e) => {
    e.preventDefault()
  }

  return ( 
    <div className='loginPanel'>
      <i className="far fa-window-close" onClick={()=> setLoginPanel(prev => !prev)}></i>
      <form id="isForm">
        <div className='wrapper-label'>
          <label>
            <input 
              name='login'
              placeholder='login'
              type="text" 
              value={inputLogin}
              onChange={(e)=> setInputLogin(e.target.value)}
            />
          </label>
          <label>
            <input 
              name='password'
              placeholder='password'
              type="text" 
              value={inputPassword}
              onChange={(e)=> setPassword(e.target.value)}
            />
          </label>
        </div>
        <div className='wrapper-submit'>
          <input className='submit'
            type="submit"
            value='Sign In' 
            onClick={signIn}
          />
          <button className='submit' onClick={reginsterAcc}>register</button>
        </div>
        <p><span></span> OR <span></span></p>
        <button className='wrapper-google'>
          <p><i className="fab fa-google"></i></p>
          <p>Continue with Google</p>
        </button>
      </form>
    </div>
   );
}
 
export default PanelAdmin;
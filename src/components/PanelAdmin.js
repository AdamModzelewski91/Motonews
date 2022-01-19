import React, { useEffect, useState } from 'react';
import '../styles/PanelAdmin.scss'

const objUsers = [
  {
    login: "Adam",
    password: "123456",
  },
  {
    login: "Dan",
    password: "54321",
  }
]

const PanelAdmin = ({setLoginPanel, setIsLogged, isLogged, loggedUser, setLoggedUser}) => {

  const [inputLogin, setInputLogin] = useState('')
  const [inputPassword, setPassword] = useState('')
  const [warnLgMsg, setWarnLgMsg] = useState(false)
  const [warnPwMsg, setWarnPwMsg] = useState(false)
  const [badLg, setBadLg] = useState(false)
  const [badPw, setBadPw] = useState(false)

  useEffect(()=> {    
    const time = setTimeout(()=>{
      setWarnLgMsg(false)
      setWarnPwMsg(false)
      setBadLg(false)
      setBadPw(false)
    }, 3000)
   return () => clearTimeout(time)
  },[warnLgMsg, warnPwMsg, badLg, badPw])
  
  const signIn = (e) => {
    e.preventDefault()

    const checkUser = objUsers.filter(user => user.login === inputLogin)    
    if (checkUser.filter(pw => pw.password === inputPassword).length === 1) {      
      setIsLogged(prev => !prev)
      setLoggedUser(inputLogin)
      setLoginPanel(false)
    } else if (checkUser.length === 0){
      setBadLg(true)
    } else if (checkUser.filter(pw => pw.password === inputPassword).length === 0){
      setBadPw(true)
    }
  }  

   const registerAcc = (e) => {
    e.preventDefault()

    if(inputLogin.length > 5 && inputPassword.length > 5){
      objUsers.push({login: inputLogin, password: inputPassword})
      setLoginPanel(false)
    } else if(inputLogin.length <= 5) {
      setWarnLgMsg(true)      
    } else if(inputPassword.length <= 5){
      setWarnPwMsg(true)
    }
  }

  const logoutAcc = (e) => {
    e.preventDefault()
    
    setIsLogged(prev => !prev)
    setLoginPanel(false)    
  }
  
  return ( 
    <div className='loginPanel'>
      <i className="far fa-window-close" onClick={()=> setLoginPanel(prev => !prev)}></i>
      {!isLogged ? <form id="isForm">
        <div className='wrapper-label'>          
          <label for='login'> {warnLgMsg ? 'Login is to short. At least 6 chars.' : '' || badLg ? 'Check your login.' : ''} </label>
            <input 
              id='login'
              name='login'
              placeholder='login'
              type="text" 
              value={inputLogin}
              onChange={(e)=> setInputLogin(e.target.value)}
            />     
          <label for='password'> {warnPwMsg ? 'Password is to short. At least 6 chars.' : '' || badPw ? 'Wrong password.' : ''} </label> 
            <input 
              id="password"
              name='password'
              placeholder='password'
              type="password" 
              value={inputPassword}
              onChange={(e)=> setPassword(e.target.value)}
            />                 
        </div>
        <div className='wrapper-submit'>
          <input className='submit'
            type="submit"
            value='Sign In' 
            onClick={signIn}
          />
          <button className='submit' onClick={registerAcc}>register</button>
        </div>
        <p><span></span> OR <span></span></p>
        <button className='wrapper-google' onClick={(e) => e.preventDefault() }>
          <p><i className="fab fa-google"></i></p>
          <p>Continue with Google</p>
        </button>
      </form> : 
      <div className='account'>
        <div className='userPict'>
          <i className="fas fa-user"></i>
        </div>
        <p>{loggedUser}</p>
        <button className='submit' onClick={logoutAcc}>Logout</button>
      </div> }
    </div>
   );
}
 
export default PanelAdmin;
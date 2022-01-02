import React from 'react';
import '../styles/Footer.scss'

const Footer = () => {
  return ( 
    <footer>
      <div className='footer-wrap'>
        <form className='subForm'>
          <div>
            <input type="email" placeholder='Your e-mail' />
            <input type="submit" value='Subscribe Now!' />
          </div>
        </form>
        <div className='contact'>   
          <h2>Contact</h2>     
          <ul>
            <li><i className="fas fa-phone"></i>555 666 777</li>
            <li><i className="fas fa-envelope"></i>motonews@info.com</li>
          </ul>
        </div>
        <div className='copySocial'>
          <p>&copy; All rights reserver 2022</p>
          <div className='social-media'>
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
          </div>
        </div>
      </div>
    </footer>
   );
}
 
export default Footer

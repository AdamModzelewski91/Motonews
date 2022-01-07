import React, { useEffect, useState, useRef} from 'react';
import imageAPI from './api/data';

import '../styles/Header.scss';


const Header = () => {
  const [index, setIndex] = useState(0)  
  
  const newName = useRef(index)
  newName.current = index
  const [dotActive, setDotActive] = useState({0:true, 1:false, 2:false, 3:false, 4:false});
  
    const handleClick = (e) => {       
      const value = Number(e.target.getAttribute('value'))        
      setIndex(prevState => prevState = value)  
      handleChangeDot()
    }

    const handleChangeDot = () => {      
      setDotActive(() => {
        return {
          0:false, 
          1:false, 
          2:false, 
          3:false, 
          4:false,
          [newName.current]: true
        }})
    }

    useEffect(() => {
      const time = setInterval(() => {         
        setIndex( newName.current < 4 ? newName.current + 1 : newName.current = 0)            
        setDotActive(prev => {
          return {
            0:false, 
            1:false, 
            2:false, 
            3:false, 
            4:false,
            [newName.current]: !prev[newName.current]
          }})    
      }, 4000);       
    
      return () =>  clearInterval(time)
  }, [index]);

  const handleNextImg = () => {     
    handleChangeDot()
    setIndex(newName.current < 4 ? newName.current + 1 : newName.current = 0)   
  }

  const handleBeforeImg = () => {          
    handleChangeDot()
    setIndex(newName.current >= 1 ? newName.current - 1 : newName.current = 4)    
  }
  
  return (
    <div className='header'>         
        <div className='gallery'>
          <div className='mini'>
            <div className='small' value='0' onClick={handleClick}
              style={{backgroundImage: `url(${imageAPI[0].picture})`}}>
            </div>
            <div className='small' value='1' onClick={handleClick}
              style={{backgroundImage: `url(${imageAPI[1].picture})`}}>
            </div>
            <div className='small' value='2' onClick={handleClick}
              style={{backgroundImage: `url(${imageAPI[2].picture})`}}>
            </div>
            <div className='small' value='3' onClick={handleClick}
              style={{backgroundImage: `url(${imageAPI[3].picture})`}}>
            </div>
            <div className='small' value='4' onClick={handleClick}
              style={{backgroundImage: `url(${imageAPI[4].picture})`}}>              
            </div>
            {/* {console.log(index)} */}
          </div>
          <div className='big-container'>
            <div className='arrow' onClick={handleBeforeImg}><i className="fas fa-chevron-left"></i></div>
            <div className='arrow' onClick={handleNextImg}><i className="fas fa-chevron-right"></i></div>
            <div className='big' 
              style={{backgroundImage: `url(${imageAPI[index].picture})`}}>
            </div> 
            <div className='dots'>              
              <div value='0' onClick={handleClick} className={`dot ${dotActive[0] ? 'active' : null} `}></div>  
              <div value='1' onClick={handleClick} className={`dot ${dotActive[1] ? 'active' : null} `}></div>  
              <div value='2' onClick={handleClick} className={`dot ${dotActive[2] ? 'active' : null} `}></div>  
              <div value='3' onClick={handleClick} className={`dot ${dotActive[3] ? 'active' : null} `}></div>  
              <div value='4' onClick={handleClick} className={`dot ${dotActive[4] ? 'active' : null} `}></div>                
            </div> 
          </div>
        </div>
    </div>
  );
}

export default Header;

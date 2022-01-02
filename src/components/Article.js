import React from 'react';
import '../styles/Article.scss'

const Article = () => {
  return (  
    <article className='articles'>
      <div className='article'>
        <div className='article-text block'>
            <h1>Tesla</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis dolorum exercitationem quibusdam, officiis, reprehenderit quia necessitatibus vel velit magni laudantium nihil odit voluptatum architecto fugit veniam. Reprehenderit qui dolor vel? Architecto fugit veniam. Reprehenderit qui dolor vel?</p>
        </div>
        <div className='article-image block'>
          <img src={require("../img/Tesla-Roadster-103.jpg")} alt="" />
        </div>
      </div>
      <div className='article'>
        <div className='article-text block'>
            <h1>Mercedes</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis dolorum exercitationem quibusdam, officiis, reprehenderit quia necessitatibus vel velit magni laudantium nihil odit voluptatum architecto fugit veniam. Reprehenderit qui dolor vel?</p>
        </div>
        <div className='article-image block'>
        <img src={require("../img/mercedes-benz.jpg")} alt="" />
        </div>
      </div>
      <div className='article'>
        <div className='article-text block'>
            <h1>Mustang</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis dolorum exercitationem quibusdam, officiis, reprehenderit quia necessitatibus vel velit magni laudantium nihil odit voluptatum architecto fugit veniam. Reprehenderit qui dolor vel?</p>
        </div>
        <div className='article-image block'>
         <img src={require("../img/mustang-mach-e-otwarcie.jpg")} alt="" />
        </div>
      </div>
      <div className='article'>
        <div className='article-text block'>
            <h1>Adui</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis dolorum exercitationem quibusdam, officiis, reprehenderit quia necessitatibus vel velit magni laudantium nihil odit voluptatum architecto fugit veniam. Reprehenderit qui dolor vel?</p>
        </div>
        <div className='article-image block'>
         <img src={require("../img/audi.jpg")} alt="" />
        </div>
      </div>
    </article>
  );
}
 
export default Article;
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Nav from './components/Nav';
import Header from './components/Header';
import Article from './components/Article';
import Footer from './components/Footer';
import Offers from './components/Offers';
import Gadgets from './components/Gadgets';
import ErrorPage from './components/ErrorPage';


function App() {

  return (
    <Router>
      <div className="App">       
        <Nav />       
        <section>
          <Routes>
            <Route>
              {['/', '/news'].map((path) => (
                <Route path={path} key={path} element={<><Header/><Article/></>} />
              ))}
            </Route>           
            <Route> 
              {['/new', '/used'].map((path) => (
                <Route path={path} key={path} element={<Offers/>} />
              )) }
            </Route>
            <Route> 
              {['/paints', '/cleaning', '/fixing'].map((path) => (
                <Route path={path} key={path} element={<Gadgets/>} />
              )) }
            </Route>          
            <Route path="*" element={<ErrorPage/>} />
          </Routes>
        </section>        
        <Footer />
      </div>
    </Router>
  );
}

export default App;


import React, { useState } from 'react';
import ProductList from './ProductList';
import './App.css';
import AboutUs from './AboutUs';

function App() {
  
  const [showProductList, setShowProductList] = useState(false);
  const [shopping, setShopping] = useState(false);

  const handleGetStartedClick = () => {
    setShowProductList(true);
    setShopping(true);
  };

  const handleAboutUsClicked = () => {
    setShowProductList(false);
  };

  const getStarted = () => {
    if(!shopping){
        return('Get Started');
    }else{
        return('Continue Shopping');
    }
  };

  return (
    <div className="app-container">
      <div className={`landing-page ${showProductList ? 'fade-out' : ''}`}>
        <div className="background-image"></div>
        <div className="content">
         <div className="landing_content">
         <h1>Welcome To James' Mountain Greenery</h1>
          <div className="divider"></div>
          <p>Where Nature Meets the Peaks</p>
          <button className="get-started-button" onClick={handleGetStartedClick}>{getStarted()}</button>
         </div>
          <div className="aboutus_container">
          <AboutUs/>
          </div>
          </div>

      </div>
      <div className={`product-list-container ${showProductList ? 'visible' : ''}`}>
        <ProductList aboutUsClicked={handleAboutUsClicked}/>
      </div>
    </div>
  );
}

export default App;




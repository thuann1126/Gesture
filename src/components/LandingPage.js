import React from 'react';
import ReactDOM from 'react-dom';
import logo from '../images/landing_page/Gesture_Logo_05.png';
import undrawSVG from '../images/landing_page/undraw_back_to_school_inwc.svg'
import '../index.css';
import Login from './Login';
import Register from './Register';


const LandingPage = () => {

  return(

    <div>
      <img src={logo} className="absolute w-32 ml-4 mt-4" alt="Gesture logo"/>
      {/* Hero Starts */}
      <div className="hero min-h-screen bg-base-content">
        <div className="text-center flex flex-col items-center justify-center m-4">
          {/* Main */}
          <img src={undrawSVG} alt="Time to learn" className="w-48 xl:w-80 mb-4 xl:mb-8"/>
          <h1 className="text-2xl xl:text-4xl font-bold mb-4 xl:mb-8 text-primary-content">
                It's your time to sign! <br/> Begin your ASL journey on  
                <em className="text-primary"> Gesture</em>! 👋
          </h1>
          {/* Login Form */}
          <Login/>
          {/* Register Form */}
          <Register/>
          {/* collapse content */}
          <div className="collapse collapse-arrow w-60 border rounded-box border-primary border-opacity-5 shadow-lg text-primary-content" tabIndex="0">
            <input type="checkbox"/> 
            <div className="collapse-title text-xl">What is <em className="text-primary"> Gesture</em>?</div>
            <div className="collapse-content">
              <p> 
                <em className="text-primary">Gesture </em> 
                is an interactive and testing web application that aims to teach new users the 
                <em> American Sign Language</em>
              </p>
            </div>
          </div>
          {/* collapse content ends */}
        </div>
      </div>
      {/* Hero Ends */}
    </div>
  )
    
    

}

export default LandingPage;
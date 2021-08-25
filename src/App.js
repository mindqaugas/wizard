import React, { useEffect } from 'react';
import './App.css';
import {useSelector } from "react-redux";
import './i18n';
import i18next from "i18next";
import StepsIndicator from "./Components/shared/StepsIndicator";
import FirstStep from "./Components/FirstStep";
import SecondStep from "./Components/SecondStep";
import ThirdStep from "./Components/ThirdStep";
import Buttons from "./Components/shared/Buttons";


function App() {
  const currentPage = useSelector(state => state.stepsReducer.currentPage);

  useEffect(() =>  {
    
    if(window.location.pathname === "/en"){
      i18next.changeLanguage('en', (err, t) => {
        if (err) return console.log('Cant load language', err);
        t('key'); 
      });
    }
    if(window.location.pathname === "/es"){
      i18next.changeLanguage('es', (err, t) => {
        if (err) return console.log('No podemos cargar la idioma', err);
        t('key'); 
      });

    }
   
  },[])

 

  const renderComponent = () => {
    if(currentPage === 1){
        return <FirstStep />
    }
    if(currentPage === 2){
        return <SecondStep /> 
    }
    if(currentPage === 3){
      return  <ThirdStep />
    }
}

  return (
    <div className="App">
      <div className="App_wrapper">
        <div className="App_indicator">
          <StepsIndicator />
        </div>
        <div className="App_main">
          {renderComponent()}
        </div>
        <div className="App_buttons">
          {currentPage === 1 || currentPage === 2 ? <Buttons /> : null}
        </div>
      </div>
    </div>
  );
}

export default App;

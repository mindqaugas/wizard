import React from "react";
import { useTranslation } from 'react-i18next';
import leftImg from '../assets/180225.png';
import rightImg from '../assets/180252.png';

import "../styles/firstStep.css"

const FirstStep = () => {

    const { t } = useTranslation();


    return ( 
        <div className="first_step_conatiner">
            <div className="first_step_title">
                {t('Title')}
            </div>
            <div className="first_step_explain">
                <div className="first_step_explain_left">
                    <div className="first_step_top">
                        <img src={leftImg} className="left_png" alt="Brain"/>
                    </div>
                    <div className="first_step_bottom">
                    {t('ImgLeft')}                    </div>
                </div>
                <div className="first_step_explain_right">
                    <div className="first_step_top">
                         <img src={rightImg} className="right_png" alt="Lock"/>
                    </div>
                    <div className="first_step_bottom">
                    {t('ImgRight')}                      </div>
                </div>
            </div>
            <div className="first_step_funciona">
                <div className="first_step_general_title">
                {t('FnTitle')}                  </div>
                <div className="first_step_general_desc">
                {t('FnDesc')}                  </div>
            </div>
            <div className="first_step_guarda">
                <div className="first_step_general_title">
                {t('GrTitle')}  
                </div>
                <div className="first_step_general_desc">
                {t('GrDesc')}                 
                </div>
            </div>
            <div className="first_step_botones">
                
            </div>
        </div>
     );
}
 
export default FirstStep;
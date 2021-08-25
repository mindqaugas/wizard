import React from 'react';
import "./submitOk.css";
import { useTranslation } from 'react-i18next';
  
const SubmitOk = () => {
    const { t } = useTranslation();
    return ( 
        <div className="success_container">
            <div className="success_container_top">
                <div className="success_container_title">
                    {t("SubTitle")}
                </div>
                <div className="success_container_desc">
                    {t("SubDesc")}      
                </div>
            </div>
            <div className="success_container_bottom">
                <button className="success_btn">
                    {t("SubBtn")}
                </button>
            </div>
        </div>
     );
}
 
export default SubmitOk;
import React from 'react';
import { useDispatch } from "react-redux";
import { onNextPageCancel } from "../../store/actions/stepsActions.js";
import { onAllCancel} from "../../store/actions/passwordActions.js";

import "./submitNot.css";
import { useTranslation } from 'react-i18next';


const SubmitNot = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const cancelHandle = () => {
        dispatch(
            onNextPageCancel({
              type: "ON_NEXT_PAGE_CANCEL"
            })
        );
        dispatch(
            onAllCancel({
                type: "ON_ALL_CANCEL"
            })
        );  
  
    }

    return ( 
        <div className="fail_container">
            <div className="fail_container_top">
                <div className="fail_container_title">
                    {t("SubNotTitle")}
                </div>
                <div className="fail_container_desc">
                {t("SubNotDesc")}
                </div>
            </div>
            <div className="fail_container_bottom">
                <button className="fail_btn" onClick={cancelHandle}>
                {t("SubNotBtn")}
                </button>
            </div>
        </div>
     );
}
 
export default SubmitNot;
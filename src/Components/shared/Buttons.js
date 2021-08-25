import React from 'react';
import "./buttons.css";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from 'react-i18next';

import { onNextPage, onNextPageCancel } from "../../store/actions/stepsActions.js";
import { onEmptyPassword1, onEmptyPassword2, onEmptyPista } from "../../store/actions/passwordActions.js";

const Buttons = () => {
    const currentPage = useSelector(state => state.stepsReducer.currentPage);
    const {pass, pass2, pista} = useSelector(state => state.passwordReducer);

    const dispatch = useDispatch()
    const { t } = useTranslation();

    const nextDispatch = () => {
        dispatch(
            onNextPage({
              type: "ON_NEXT_PAGE"
            })
          );
          
    };
    const clickHandle = (e) => {
        if(currentPage === 1){
                nextDispatch(); 
        }
        if(currentPage === 2){
            if(pass  === pass2 && pista !== ""){
                nextDispatch();
            }
            if(pass === ""){
                dispatch(
                    onEmptyPassword1({
                        type: "ON_PASS_EMPTY", dataPassEmpty: true
                    })
                )
            }
            if(pass2 === ""){
                dispatch(
                    onEmptyPassword2({
                        type: "ON_PASS2_EMPTY", dataPass2Empty: true
                    })
                )
            }
            if(pista === ""){
                dispatch(
                    onEmptyPista({
                        type: "ON_PISTA_EMPTY", dataPistaEmpty: true
                    })
                )
            }
            
        }
    }

    const cancelHandle = () => {
        dispatch(
            onNextPageCancel({
              type: "ON_NEXT_PAGE_CANCEL"
            })
        );
    }
    return ( 
        <div className="buttons_container">
            <div className="buttons_cancel">
                <button  className="button_cancel" onClick={cancelHandle}>
                   {t('Cancel')}
                </button>
            </div>
            <div className="buttons_continue">
                <button className="button_continue" onClick={clickHandle}>
                    {t('Continue')} &gt;
                </button>
            </div>
        </div>
     );
}
 
export default Buttons;
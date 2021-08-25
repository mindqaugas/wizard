
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { onSubmitOk, onSubmitNot} from "../store/actions/passwordActions.js";

import { onAllBubbleDone } from "../store/actions/stepsActions.js";
import {submitForm} from "../services/api";
import SubmitOk from "./ResponseModals/SubmitOk";
import SubmitNot from "./ResponseModals/SubmitNot";
import "../styles/thirdStep.css";
const ThirdStep = () => {
    const {pass, submitOk, submitNot} =  useSelector(state => state.passwordReducer);
    
    
    const dispatch = useDispatch();

    useEffect(() => {    
        submitForm(pass).then((value) => {
            if(value.status === 200){
                dispatch(
                    onSubmitOk({
                        type: "ON_SUBMIT_OK", onSubmitOkData: true
                    })
                );   
                dispatch(
                    onAllBubbleDone({
                        type: "ON_ALL_BUBBLE_DONE"
                    })
                );  
            }
        }).catch(() => {
            dispatch(
                onSubmitNot({
                    type: "ON_SUBMIT_NOT", onSubmitNotData: true
                })
            );        
        })
    }, [submitNot, submitOk, dispatch, pass])
    
    return ( 
        <div className="third_step_container">
            {submitOk && <SubmitOk />}
            {submitNot && <SubmitNot />}
        </div>
     );
}
 
export default ThirdStep;
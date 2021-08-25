import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import { onFirstBubble } from "../../store/actions/stepsActions.js";
import { onSecondBubble } from "../../store/actions/stepsActions.js";
import { onThirdBubble } from "../../store/actions/stepsActions.js";

import "./stepsIndicator.css";

const StepsIndicator = () => {
    const {currentPage,
           firstBubble, secondBubble, thirdBubble,
           firstBubblePassed, secondBubblePassed, thirdBubblePassed} = useSelector(state => state.stepsReducer);
    const dispatch = useDispatch();

    const bubbleIndicator = useCallback(() => {
        if(currentPage === 1){
            dispatch(
                onFirstBubble({
                    type: "ON_FIRST_BUBBLE_STATE"
                })
            );   
        }
        if(currentPage === 2){
            dispatch(
                onSecondBubble({
                    type: "ON_SECOND_BUBBLE_STATE"
                })
            );   
        }
        if(currentPage === 3){
            dispatch(
                onThirdBubble({
                    type: "ON_THIRD_BUBBLE_STATE"
                })
            );   
        }
    }, [currentPage, dispatch])

    useEffect(() => {
        bubbleIndicator();
    }, [currentPage, bubbleIndicator])

    const indicatorLineColor = () => {
        if(currentPage === 2){
            return "indicator_inner_half"
        }
        if(currentPage === 3){
            return "indicator_inner_full"
        }
    }

    return ( 
        <div className="indicator_step_outer">
        <div className="indicator_step_container">
            <div className="indicator_line">
                <div className={`indicator_line_inner ${indicatorLineColor()}`}>

                </div>
            </div>
            <div className="indicator_step_1">
                <div className={`indicator ${firstBubble ? "indicator_active" : ""}
                                           ${currentPage === 1 && "indicator_bubble"}
                                           ${firstBubblePassed ? "indicator_active_passed" : ""}`}>
                 {firstBubblePassed ? <span>&#10004;</span> : 1}
                </div>
            </div>
            <div className="indicator_step_2">
                <div className={`indicator ${secondBubble ? "indicator_active" : ""}
                                           ${currentPage === 2 && "indicator_bubble"}
                                           ${secondBubblePassed ? "indicator_active_passed" : ""}`}>
                {secondBubblePassed ? <span>&#10004;</span> : 2}
                </div>
            </div>
            <div className="indicator_step_3">
                <div className={`indicator ${thirdBubble ? "indicator_active" : ""}
                                           ${currentPage === 3 && "indicator_bubble"}
                                           ${thirdBubblePassed ? "indicator_active_passed" : ""}`}>
                {thirdBubblePassed ? <span>&#10004;</span> : 3}
                </div>
            </div>
        </div>
        </div>
     );
}
 
export default StepsIndicator;
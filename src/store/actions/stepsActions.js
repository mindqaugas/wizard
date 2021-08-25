import * as actionTypes from './actionTypes';

export const onNextPage = () => { 
    return {
        type: actionTypes.ON_NEXT_PAGE
    };
};

export const onNextPageCancel = () => { 
    return {
        type: actionTypes.ON_NEXT_PAGE_CANCEL
    };
};

export const onFirstBubble = () => { 
    return {
        type: actionTypes.ON_FIRST_BUBBLE_STATE
    };
};

export const onSecondBubble = () => { 
    return {
        type: actionTypes.ON_SECOND_BUBBLE_STATE
    };
};

export const onThirdBubble = () => { 
    return {
        type: actionTypes.ON_THIRD_BUBBLE_STATE
    };
};
export const onAllBubbleDone = () => { 
    return {
        type: actionTypes.ON_ALL_BUBBLE_DONE
    };
};

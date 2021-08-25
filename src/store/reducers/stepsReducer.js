import * as actionType from "../actions/actionTypes";

const initState = {
  currentPage: 1,
  firstBubble: false,
  secondBubble: false,
  thirdBubble: false,

  firstBubblePassed: false,
  secondBubblePassed: false,
  thirdBubblePassed: false,
  allBubbleDone: false,

  submitForm: false
};
const stepsReducer = (state = initState, action) => {
  switch (action.type) {
    case actionType.ON_NEXT_PAGE:
      return {
        ...state,
        currentPage: state.currentPage === 3 ? 3 : state.currentPage + 1,
      };
    case actionType.ON_NEXT_PAGE_CANCEL:
      return {
        ...state,
        currentPage: 1,
        firstBubble: true,
        secondBubble: false,
        thirdBubble: false,

        firstBubblePassed: false,
        secondBubblePassed: false,
        thirdBubblePassed: false,
        allBubbleDone: false,

        submitForm: false
      }; 
    case actionType.ON_FIRST_BUBBLE_STATE:
      return {
        ...state,
        firstBubble: true,
        
    }; 
    case actionType.ON_SECOND_BUBBLE_STATE:
      return {
        ...state,
        secondBubble: true,
        firstBubblePassed: true,
    }; 
    case actionType.ON_THIRD_BUBBLE_STATE:
      return {
        ...state,
        thirdBubble: true,
        secondBubblePassed: true,
        
    }; 
    case actionType.ON_ALL_BUBBLE_DONE:
      return {
        ...state,
        thirdBubblePassed: true
        
    }; 
    default:
      return state;
  }
};

export default stepsReducer;

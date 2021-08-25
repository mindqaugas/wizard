import * as actionType from "../actions/actionTypes";

const initState = {
 submitOk: false,
 submitNot: false,
 pass: "",
 pass2: "", 
 pista: "",
 emptyPass: false,
 emptyPass2: false,
 emptyPista: false
};
const passwordReducer = (state = initState, action) => {
  switch (action.type) {
    case actionType.ON_ALL_CANCEL: 
    
    return {
      ...state,
    submitOk: false,
    submitNot: false,
    pass: "",
    pass2: "", 
    pista: "",
    emptyPass: false,
    emptyPass2: false,
    emptyPista: false
  }; 
    case actionType.ON_SUBMIT_OK: 
      return {
      ...state,
      submitOk: action.okSubmit
    }; 
    case actionType.ON_SUBMIT_NOT: 
      return {
      ...state,
      submitNot: action.notSubmit
    }; 
    case actionType.ON_SUBMIT_PASS: 
      return {
      ...state,
      pass: action.pass
    }; 
    case actionType.ON_SUBMIT_PASS2: 
      return {
      ...state,
      pass2: action.pass2
      }; 
    case actionType.ON_SUBMIT_PISTA:
      
      return {
      ...state,
      pista: action.pista
      }; 
    case actionType.ON_PASS_EMPTY: 
      return {
      ...state,
      emptyPass: action.emptyPass
      }; 
    case actionType.ON_PASS2_EMPTY: 
        return {
        ...state,
        emptyPass2: action.emptyPass2
        };
    case actionType.ON_PISTA_EMPTY: 
          return {
          ...state,
          emptyPista: action.emptyPista
          };  
    default:
      return state;
  }
};

export default passwordReducer;

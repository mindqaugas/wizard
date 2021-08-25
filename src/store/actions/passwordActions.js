import * as actionTypes from './actionTypes';

export const onPassword1 = (value) => { 
    return {
        type: actionTypes.ON_SUBMIT_PASS, pass: value.datapass
    };
};
export const onPassword2 = (value) => { 
    return {
        type: actionTypes.ON_SUBMIT_PASS2, pass2: value.datapass2
    };
};
export const onPista = (value) => {
    return {
        type: actionTypes.ON_SUBMIT_PISTA, pista: value.datapista
    };
};
export const onEmptyPassword1 = (value) => {
    return {
        type: actionTypes.ON_PASS_EMPTY, emptyPass: value.dataPassEmpty
    };
};
export const onEmptyPassword2 = (value) => { 
    return {
        type: actionTypes.ON_PASS2_EMPTY, emptyPass2: value.dataPass2Empty
    };
};
export const onEmptyPista = (value) => { 
    return {
        type: actionTypes.ON_PISTA_EMPTY, emptyPista: value.dataPistaEmpty
    };
};


export const onSubmitOk = (value) => { 
    return {
        type: actionTypes.ON_SUBMIT_OK, okSubmit: value.onSubmitOkData
    };
};

export const onSubmitNot = (value) => { 
    return {
        type: actionTypes.ON_SUBMIT_NOT, notSubmit: value.onSubmitNotData
    };
};
export const onAllCancel = (value) => { 
    return {
        type: actionTypes.ON_ALL_CANCEL
    };
};
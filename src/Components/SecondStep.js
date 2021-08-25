import React, { useState, useEffect, useCallback, useMemo, } from "react";
import { useTranslation } from 'react-i18next';

import eyeImg from '../assets/eye-30.png';
import "../styles/secondStep.css";
import { useDispatch, useSelector } from "react-redux";
import {onPassword1,
        onPassword2, 
        onPista, 
        onEmptyPassword1, 
        onEmptyPassword2, 
        onEmptyPista } from "../store/actions/passwordActions.js";

const SecondStep = () => {
    const dispatch = useDispatch();
    const { t } = useTranslation();
    const {pass, pass2, pista, emptyPass, emptyPass2, emptyPista} = useSelector(state => state.passwordReducer);

    const [clave1, setClave1] = useState(false);
    const [clave2, setClave2] = useState(false);
    
    const [claveErrMsg1, setErrMsg1] = useState(false);
    const [claveErrMsg2, setErrMsg2] = useState(false);
    const [pistaErrMsg, setPistaErrMsg] = useState(false);

    const [passStateError, setPassStateError] = useState({passwordError: t('ConValida'),
    colorState: true});
    const [passStateError2, setPassStateError2] = useState({passwordError: t('ConValida'),
    colorState: true});
    const [pistaStateError, setPistaStateError] = useState({pistaError: t('PistaNoValida'),
    colorState: true});

    const reg = useMemo(() => {
        return /((?=.*\d)(?=.*[A-Z])(?=.*[a-z]).{8,24})/
    }, []);

    const regExp1 = useCallback(() => {
        if(reg.test(pass) === false){
            setPassStateError({
                passwordError: t('ConNoValida'),
                colorState: true
            });
            setErrMsg1(true)
        }else{
            setPassStateError({
                passwordError: t('ConValida'),
                colorState: false
            });   
        }  
        if(pass.length === 0){
            setErrMsg1(false)
        }
    }, [pass, reg, t])

    const regExp2 = useCallback(() => {
        if(reg.test(pass2) === false){
            setPassStateError2({
                passwordError: t('ConNoValida'),
                colorState: true
            });
            setErrMsg2(true)
        }else{
            setPassStateError2({
                passwordError: t('ConValida'),
                colorState: false
            });
        }
        if(pass2.length === 0){
            setErrMsg2(false)
        }
    }, [pass2, reg, t])

    const regExpPista = useCallback(() => {
        if(pista === ""){
            setPistaStateError({
                pistaError: t('PistaNoValida'),
                colorState: true
            });
            setPistaErrMsg(true)
        }else{
            setPistaStateError({
                pistaError: t('PistaCorrect'),
                colorState: false
            });
        }
        if(pista.length === 0){
            setPistaErrMsg(false)
        }
    }, [pista, t])

    useEffect(() => {
        regExp1();
    }, [pass, regExp1])

    useEffect(() => {
        regExp2();
    }, [pass2, regExp2])

    useEffect(() => {
        regExpPista();
    }, [pista, regExpPista])

    const showClave1 = () => {
        setClave1(!clave1)
    };
    const showClave2 = () => {
        setClave2(!clave2)
    };

    const handleInputChangeFirst = (e) => {    
        let value = e.target.value;  
        dispatch(
            onPassword1({
                type: "ON_SUBMIT_PASS", datapass: value
            })
        )
        dispatch(
            onEmptyPassword1({
                type: "ON_PASS_EMPTY", dataPassEmpty: false
            })
        )
    };
    const handleInputChangeSecond = (e) => {
        let value = e.target.value;
        dispatch(
            onPassword2({
                type: "ON_SUBMIT_PASS2", datapass2: value
            })
        )
        dispatch(
            onEmptyPassword2({
                type: "ON_PASS2_EMPTY", dataPass2Empty: false
            })
        ) 
    };
    
    const handlePistaChange = (e) => {
        let value = e.target.value;
        dispatch(
            onPista({
                type: "ON_SUBMIT_PISTA", datapista: value
            })
        )
        dispatch(
            onEmptyPista({
                type: "ON_PISTA_EMPTY", dataPistaEmpty: false
            })
        ) 
        setPistaErrMsg(true)
    }


    return ( 
        <div className="second_step_container">
            <div className="second_step_title">
            {t('Title')} 
            </div>
            <div className="second_step_desc">
            {t('SecondDesc1')} <br /> {t('SecondDesc2')}
            </div>
            <div className="second_step_inputs">
                <div className="second_step_inputs_clave">
                    <label>
                        <img src={eyeImg} alt="Eye" className={clave1 ? "second_step_input_eye_open" : "second_step_input_eye"} onClick={showClave1}/>
                        <span className="second_step_input_lable">{t('PassLable1')}</span><br />
                        <input type={clave1 ? "text" : "password"}
                               className="second_step_input" 
                               placeholder={t('PassInside1')}
                               onChange={(e) => handleInputChangeFirst(e)}
                               name="password"
                               value={pass}
                               spellCheck="false"
                               autoComplete="off"/>
                        
                    </label>
                    <span className={passStateError.colorState ? 
                                    "pass_validation_danger" : 
                                    "pass_validation_ok" }>
                                    {claveErrMsg1 && passStateError.passwordError}
                                    {emptyPass && t('NoBlanco')}
                    </span>
                </div>
                <div className="second_step_inputs_clave2">
                    <label>
                        <img src={eyeImg} alt="Eye" className={clave2 ? "second_step_input_eye_open" : "second_step_input_eye"} onClick={showClave2}/>
                        <span className="second_step_input_lable">{t('PassLable2')}</span>
                        <br />
                        <input type={clave2 ? "text" : "password"}
                               className="second_step_input"
                               placeholder={t('PassInside2')}
                               onChange={handleInputChangeSecond}
                               name="password2"
                               value={pass2}
                               spellCheck="false"
                               autoComplete="off"/>
                    </label>
                    <span className={passStateError2.colorState ?
                                    "pass_validation_danger" : 
                                    "pass_validation_ok" }>
                                    {claveErrMsg2 && passStateError2.passwordError}
                                    {emptyPass2 && t('NoBlanco')}
                    </span>
                </div>
            </div>
            <div className="second_step_pista">
                <div className="second_step_pista_primero">
                {t('PistaDesc')}
                </div>
                <div className="second_step_pista_segundo">
                {t('PistaLable')}
                </div>
                <div className="second_step_pista_input">
                    <input type="text" 
                           className="second_step_input_pista" 
                           placeholder={t('PistaInside')}
                           onChange={handlePistaChange}
                           name="pista"
                           value={pista}
                           spellCheck="false"
                           maxLength="255"
                           autoComplete="off"/>
                    <span className={pistaStateError.colorState ?
                                    "pass_validation_danger" : 
                                    "pass_validation_ok" }>
                                    {pistaErrMsg && pistaStateError.pistaError}
                                    {emptyPista && t('NoBlanco')}
                    </span>
                </div>
                <div className="second_step_pista_length">
                    {pista.length}/60
                </div>
            </div>
        </div>
     );
}
 
export default SecondStep;
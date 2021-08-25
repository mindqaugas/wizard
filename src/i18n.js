import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      //Shared
      "Title": "Create your Password Manager",
      "Cancel" : "Cancel",
      "Continue" : "Continue",
      // FIRST PAGE
      "ImgLeft" : "Save here all your passwords, data or any information, forget paper notes and unprotected applications.",
      "ImgRight": "Create your master key: only you can access your secrets with it.",
      "FnTitle" : "How it works",
      "FnDesc" : "First, you must create a different password for your electronic belongings. You won't be able to get your password back, so reinforce it well.",
      "GrTitle" : "What date can I save",
      "GrDesc" : "For example, the number of your card, the PIN and PUK of your mobile phone, the serial number of one of your devices or any information that you need to have in a safe place.",
       // Second PAGE
       "SecondDesc1": "First, you must create a different password for your electronic belongings.",
       "SecondDesc2" : "You will not be able to recover your password, so remember well.",
       "PassLable1" : "Create your Master Password",
       "PassLable2" : "Repeat your Master Password",
       "PistaLable": "Create your hint to remember your password (optional)",
       "PistaDesc" : "You can also create a hint to help you remember your master password.",
       "PassInside1" : "Password",
       "PassInside2" : "Repeat password",
       "PistaInside" : "Introduce hint",
       "ConValida" : "Password is valid",
       "ConNoValida" : "Password is not valid",
       "PistaNoValida" : "Hint cant be blank",
       "NoBlanco" : "Cant be blank",
       "PistaCorrect" : "Hint is correct",
        // Submit Not
       "SubNotTitle": " An error has occured!",
        "SubNotDesc" : "We have not been able to modify your Master Password.",
        "SubNotBtn" : "Back to Password Manager",
        // Submit OK
        "SubTitle": "Your Password Manager is already created!",
        "SubDesc" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
        "SubBtn" : " Enter",
    }
  },
  es: {
    translation: {
      //Shared
      "Title": "Crea tu Password Manager",
      "Cancel" : "Cancelar",
      "Continue" : "Siguente",
      // FIRST PAGE
      "ImgLeft" : "Guarda aqui todas tus contrasenas, datos o cualquier informacion, olvida las notas de papel y las aplicaciones no protegidas",
      "ImgRight": "Crea tu clave maestra: solo tu podras acceder a tus secretos con ella.",
      "FnTitle" : "Como funciona",
      "FnDesc" : "En primer lugar, debes crear una contrasena direrente para sus pertenencias electronicas. No podras recuperar tu conrasena, asi que rexuerda bien.",
      "GrTitle" : "Que datos puedes guardar",
      "GrDesc" : "Por ejemplo, el numero de tu tarjeta, el PIN y el PUK de tu telefono movil, el numero de serie de alguno de tus dispositivos o cualquier informacion que necesites tener en lugar seguro.",
      // Second PAGE
        "SecondDesc1": "En primer lugar, debes crear una contrasena diferente para sus pertenencias electronicas.",
        "SecondDesc2" : "No podras recuperar tu contrasena, asi que recuerda bien.",
        "PassLable1" : "Crea tu Contrasena Maestra",
        "PassLable2" : "Repite tu Contrasena Maestra",
        "PistaLable": "Crea tu pista para recordar tu contrasena (optional)",
        "PistaDesc" : "Tambien puedes crear una pista que te ayude a recordar tu contrasena maestra.",
        "PassInside1" : "Contrasena",
        "PassInside2" : "Repite tu contrasena",
        "PistaInside" : "Introduce tu pista",
        "ConValida" : "Contrasena esta valida",
        "ConNoValida" : "Contrasena no esta valida",
        "PistaNoValida" : "Pista no puede ser en blanco",
        "NoBlanco" : "No puede estar blanco",
        "PistaCorrect" : "Pista esta corecta",
        // Submit Not
        "SubNotTitle": " Ha habido un Error!",
        "SubNotDesc" : "No hemos podido modificar tu Contrasena Maestra.",
        "SubNotBtn" : "Volver a Password Manager",
        // Submit OK
        "SubTitle": "Tu Password Manager ya esta creado!",
        "SubDesc" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
        "SubBtn" : " Acceder",



    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    whitelist: ['en', 'es'],
    fallbackLng: ['es'],
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
     detection: {
      order: ['path'],
      lookupFromPathIndex: 0,
      checkWhitelist: true
    },

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;
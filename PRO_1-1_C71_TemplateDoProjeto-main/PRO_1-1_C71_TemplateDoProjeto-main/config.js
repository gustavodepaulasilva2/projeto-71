import firebase from "firebase";
require("@firebase/firestore");

  //Cole sua Configuração do Firebase aqui
  const firebaseConfig = {
    apiKey: "AIzaSyBo6KPdoW3uR9xAiHdwO1qMJQAjQftwQ7w",
    authDomain: "projeto-71-eded0.firebaseapp.com",
    projectId: "projeto-71-eded0",
    storageBucket: "projeto-71-eded0.appspot.com",
    messagingSenderId: "680274777929",
    appId: "1:680274777929:web:36f03770244ffa91cc2c98"
  };
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();

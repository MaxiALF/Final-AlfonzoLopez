import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDnQZJDz-0yHWJpwq9pTNaf_aaCB27pLJQ",
    authDomain: "maxpowershop-b7084.firebaseapp.com",
    projectId: "maxpowershop-b7084",
    storageBucket: "maxpowershop-b7084.appspot.com",
    messagingSenderId: "327630603434",
    appId: "1:327630603434:web:eaad3e49e55cae48c77cd3"
};

const app = initializeApp(firebaseConfig);

export const starFirebase = () => app
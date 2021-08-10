import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCroM9l6h2V1YIOWno768EspP0uqRhvrJI",
  authDomain: "e-commerce-a4c66.firebaseapp.com",
  projectId: "e-commerce-a4c66",
  storageBucket: "e-commerce-a4c66.appspot.com",
  messagingSenderId: "210827491023",
  appId: "1:210827491023:web:9db472426d30f241d229ba",
  measurementId: "G-PS7C0XVS7G"
};
export const createUserProfileDocument= async (userAuth,additionalData)=>{
if(!userAuth)return
const userRef = firestore.doc(`users/${userAuth.uid}`)
const snapShot = await userRef.get()
if(!snapShot.exists){
  const {displayName,email}=userAuth;
  const createdAt=new Date();

  try{
    await userRef.set({
      displayName,
      email,
      createdAt,
      ...additionalData
    })
  }catch(error){
alert("error creating user",error.message);
  }
}
return userRef
}
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
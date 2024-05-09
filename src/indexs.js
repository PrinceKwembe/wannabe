import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import {
  getFirestore, collection, onSnapshot,
  addDoc, deleteDoc, doc,getDoc,
  query, where,
  orderBy, serverTimestamp,
  updateDoc
} from 'firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDidSehAOJuv25zRl2on_UTP97a-Z6ZAYA",
  authDomain: "wannabe-ad6a8.firebaseapp.com",
  projectId: "wannabe-ad6a8",
  storageBucket: "wannabe-ad6a8.appspot.com",
  messagingSenderId: "27547065513",
  appId: "1:27547065513:web:a95fad60ba4523c602ddb8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();
const user = auth.currentUser || 'user not logged in';
const db = getFirestore(app);

var user_id = ''
// collection ref
const colRef = collection(db, 'collections',user_id);

function getEducation(Highest_education=''){
  return Highest_education
}


function getwhoYouAre(whoYouAre=''){
  return whoYouAre
}
window.onload = () => {
  // Login user With Google Auth
  const signInButton = document.querySelector('#sigIn');
  signInButton.addEventListener('click', (e) => {
    e.preventDefault();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        console.log('Token ' + token);
        console.log('User: ' + user.email + ' ' + user.uid);
        window.location.href = "pages/dashboard.html";
      }).catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  });

  // LogOut user
  const logoutButton = document.querySelector('.logOut');
  logoutButton.addEventListener('click', (e) => {
    e.preventDefault();
    signOut(auth)
      .then(() => {
        console.log('User signed out');
      })
      .catch(err => {
        console.log(err.message);
      });
  });

  //for onboarding page
  const Highest_education = document.querySelector('.Highest_education');
  if (Highest_education) {
      Highest_education.addEventListener('change', (e) => {
          getEducation(Highest_education.value);
      });
  } else {
      console.error("Element with class 'Highest_education' not found.");
  }
  const who_you_are = document.querySelector('.who_are_you');
  if (who_you_are) {
      who_you_are.addEventListener('change', (e) => {
          getwhoYouAre(who_you_are.value);
      });
  } else {
      console.error("Element with class 'who_are_you' not found.");
  }
  const next = document.querySelector('.update');
  if (next) {
      next.addEventListener('click', (e) => {
          e.preventDefault();
          if (Highest_education.value !=='' && who_you_are.value !=='') {
            // console.log(Highest_education.value+' '+ who_you_are.value+ ''+ user_id)
            let docRef = doc(db, 'collections', user_id)
            updateDoc(docRef, {
              Highest_education: Highest_education.value,
              who_are_you: who_you_are.value,
              createdAt: serverTimestamp()
            })
            .then(() => {
              console.log('Updated')
            }).catch(err =>{
              console.log(err)
            })
          }
          else {
            console.log("please Select" );
      
          }
          
      });
  } else {
      console.error("Element with class 'update' not found.");
  }// end onboarding page


  // for activity page
  const activityForm = document.querySelector('.activityForm');
  activityForm.addEventListener('change', (e) => {
    e.preventDefault()
    console.log(activityForm.value)
  })
  const activityNext = document.querySelector('.activityNext')
  activityNext.addEventListener('click', (e) => {
    e.preventDefault()
    console.log(activityForm.value)
    let docRef = doc(db, 'collections', user_id)
    updateDoc(docRef, {
      task_activities: activityForm.value,
      
     
    })
    .then(() => {
      console.log('Updated')
    }).catch(err =>{
      console.log(err)
    })
  })
 


  // Check authentication state
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log('User is signed in ', user.email);
      user_id = user.uid
      console.log('user: '+user_id)
      // Allow access to the dashboard page
    } else {
      console.log('No user is signed in');
      // Redirect to the login page if not already there
      if (!window.location.pathname.includes("/dist/index.html")) {
        window.location.href = "/dist/index.html";
      }
    }
  });


};

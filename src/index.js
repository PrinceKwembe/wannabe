import {Sigin, getToken} from './function'

// Login user With Google Auth
const signInButton = document.querySelector('#sigIn');
signInButton.addEventListener('click', (e) => {
    e.preventDefault();
    try {
      Sigin();
      // Handle sign-in success
    } catch (error) {
      console.error(error);
      // Handle sign-in error
    }
});

  // LogOut user
const logoutButton = document.querySelector('.logOut');
  logoutButton.addEventListener('click', (e) => {
    e.preventDefault();

  });

const addCareerButton = document.querySelector('.addCareer')
addCareerButton.addEventListener('click', (e) => {
  console.log("Add New")
  // getToken()
 })


//for onboarding page
const Highest_education = document.querySelector('.Highest_education');
const who_you_are = document.querySelector('.who_are_you');
const next = document.querySelector('.update');
next.addEventListener('click', (e) => {
  e.preventDefault();
  if (Highest_education.value !== '' && who_you_are.value !== '') {
      // console.log(Highest_education.value+' '+ who_you_are.value+ ''+ user_id)
  } else {
  console.log("please Select" );
   }
          
  });


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
  })



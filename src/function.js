import { createClient } from '@supabase/supabase-js'
// QdDWeiZnnDkDHgM9
// groq api = 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
// Create a single supabase client for interacting with your database
const supabase = createClient('https://ycyamggkijmdlfwaqfoc.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InljeWFtZ2draWptZGxmd2FxZm9jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTUxNzg1NDYsImV4cCI6MjAzMDc1NDU0Nn0.PRv56myw1ufNCXeNfq-FKSzvDdqDxPuJ4UbmmKAbfR4')

export async function checkConnection() {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
       
      if (error) {
        console.error(error);
        return false;
      }
  
      console.log('Supabase is connected!');
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }

 export async function getSession() {
    const session = await supabase.auth.getSession();
    if (session) {
      console.log('User is logged in:', session.user);
      // Use the session data as needed
    } else {
      console.log('No active session');
    }
  }

 export async function Sigin(){
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
          provider: 'google',
          options: {
              redirectTo: "http://localhost:8081/pages/career.html"
          }
      })
      if (error) {
        return error
      }
      
    getCurrentUser()

      return data
      
    } catch (error) {
      console.log(error)
    }
 }
  
export async function logOut() {
    const { error } = await supabase.auth.signOut()
    if (error) {
        console.log(error)
    }

 }

 export async function getToken() { 
  const hash = window.location.hash;
  // Remove the leading '#'character
  const hashFragment = hash.slic(1);
  const params = new URLSearchParams(hashFragment);
  const accessToken = params.get('access_token');
  const refresh_token = params.get('refresh_token');
  return { accessToken, refresh_token };
}
 export async function getCurrentUser(){
    // get the current user
     const { data: { user } } = await supabase.auth.getUser()
     localStorage.setItem('Data', user);
    return user
 }
getCurrentUser()
export async function addCareer(userId) {
    console.log(userId)
}
 
export async function addActivity(user_id,activity1,activity2,activity3) { }
import React,{ Suspense } from 'react';
import './App.css';
import { fetchData } from './Api'


const resource = fetchData();

function App() {
  return (
    <div className="App">
        <Suspense fallback={<h5>Loading User ...</h5>}>
          <ProfileData/>
        </Suspense>
        <Suspense fallback ={<h6>Loading Posts...</h6>}>
        <PostData />
        </Suspense>
    </div>
  );
}

const ProfileData = () => {
  const userData = resource.user.read();

  return (
  <h1>{userData.username}</h1>
  )
}

const PostData = () => {
  const postData = resource.posts.read();

  return(
  <p>{postData.title}</p>
  )

}

export default App;

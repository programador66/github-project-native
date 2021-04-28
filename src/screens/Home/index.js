import React, { useState,useEffect } from 'react';

import Profile from '../../components/Profile';
import Api from '../../services/index';

 
async  function getUserGitHub(){
  const response = await Api.get(`/users/programador66`);

  return response;
}

const Home = () => {
  
  const [profile, setProfile] = useState([])

  useEffect( () => {
   getUserGitHub().then(res => {
      const github = res.data;
      let obj = {
        avatar: github.avatar_url,
        bio: github.bio || "Sem informações",
        nome: github.name,
        email: github.blog,
        location: github.location || "Localização não especificada",
        seguidores: github.followers,
        seguindo: github.following,
        repositorios: github.public_repos
      }

      setProfile(obj);
     
    }).catch(e => console.log(e.response));

  },[])

  console.log(profile);

  return (
    <Profile profile={profile} />  
  );
}

export default Home;
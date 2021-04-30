import React, {useState, createContext, useEffect} from 'react';
import Api from '../services/index';

const FindUserGitHubContext = createContext({});

async  function getUserGitHub(name){
  const response = await Api.get(`/users/${name}`);

  return response;
}

export const GitHubProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(false);

   async function signIn (name) {
      if (name == " ")
      return false;

      getUserGitHub(name).then(res => {
          const github = res.data;
          let obj = {
            avatar: github.avatar_url,
            bio: github.bio || "Sem informações",
            nome: github.name,
            email: github.blog,
            location: github.location || "Localização não especificada",
            seguidores: github.followers,
            seguindo: github.following,
            repositorios: github.public_repos,
            login: github.login
          }
    
          setProfile(obj);
          setLoading(false);
        }).catch(e => console.log(e.response));
    

    }

    async function signOut() {
      setProfile(null);
    }

    async function setShowLoading(load) {
      setLoading(load);
    }

    return (
      <FindUserGitHubContext.Provider value={{signed: !!profile, profile, signIn, signOut, setShowLoading,loading}} >
          {children}
      </FindUserGitHubContext.Provider>
    )

}

export default FindUserGitHubContext;
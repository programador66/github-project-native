import React, { useContext } from 'react';
import FindUserGitHubContext from '../../contexts/gitHub';

import Profile from '../../components/Profile';



const Home = () => {

  const {profile} = useContext(FindUserGitHubContext);
    
  return (
    <Profile profile={profile} home={true} />  
  );
}

export default Home;
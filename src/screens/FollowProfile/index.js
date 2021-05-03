import React, { useContext } from 'react';
import Profile from '../../components/Profile';
import FindUserGitHubContext from '../../contexts/gitHub';


// import { Container } from './styles';

const FollowProfile = () => {
    const {followProfile} = useContext(FindUserGitHubContext);

    if (followProfile == null)
    return null;

  return <Profile profile={followProfile} home={false} />  ;
}

export default FollowProfile;
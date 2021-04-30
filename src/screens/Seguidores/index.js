import React, {useContext, useState, useEffect} from 'react';
import { useNavigation } from '@react-navigation/native';
import {AntDesign} from '@expo/vector-icons';

import FindUserGitHubContext from '../../contexts/gitHub';

import { Container,Header, ButtonBack,NumberSeguidores } from './styles';
import CardFollow from '../../components/CardFollow';

import Api from '../../services/index';

async  function getFollowersGitHub(name){
    
    const response = await Api.get(`/users/${name}/followers`);
   
    return response;
}

const Seguidores = () => {

    const {profile,setShowLoading} = useContext(FindUserGitHubContext);
    if (profile == null )
    return null;
    
    const [followers, setFollowers] = useState([]);

    useEffect(() => {
        setShowLoading(true);
        getFollowersGitHub(profile.login).then(res => {
            const githubFollowers = res.data;

            const foll = githubFollowers.map(follower => {
                return {
                    login: follower.login,
                    avatar: follower.avatar_url
                }
            })

            setFollowers(foll);
            setShowLoading(false);
        }).catch(e => console.log(e.response));

    },[profile]);

    const navigation = useNavigation();
    return (
       <Container>
           <Header>
                <ButtonBack onPress={() => navigation.navigate("Home")}>
                    <AntDesign name="arrowleft" size={28} color="white" />
                </ButtonBack>
                <NumberSeguidores>
                    {followers.length} Seguidores
                </NumberSeguidores>
            </Header>

            <CardFollow followers={followers} />
       </Container>
    );
}

export default Seguidores;
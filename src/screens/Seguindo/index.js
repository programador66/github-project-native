import React, {useContext, useState, useEffect} from 'react';
import { useNavigation } from '@react-navigation/native';
import {AntDesign} from '@expo/vector-icons';
import FindUserGitHubContext from '../../contexts/gitHub';

import { Container,Header, ButtonBack,NumberSeguidores } from './styles';
import CardFollow from '../../components/CardFollow';
import Api from '../../services/index';

async  function getFollowingGitHub(name){
    
    const response = await Api.get(`/users/${name}/following`);
   
    return response;
}

const Seguindo = () => {

    const {profile} = useContext(FindUserGitHubContext);
    if (profile == null )
    return null;
    
    const [following, setFollowing] = useState([]);

    useEffect(() => {

        getFollowingGitHub(profile.login).then(res => {
            const githubFollowing = res.data;

            const foll = githubFollowing.map(following => {
                return {
                    login: following.login,
                    avatar: following.avatar_url
                }
            })

            setFollowing(foll);
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
                    Seguindo {following.length}
                </NumberSeguidores>
            </Header>

            <CardFollow followers={following} />
       </Container>
    );
}

export default Seguindo;
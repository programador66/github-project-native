import React, { useContext } from 'react';

import { Container,ListContainer,Divider,Img, ListTitle, ListButton,ImageArea } from './styles.js';
import {AntDesign} from '@expo/vector-icons';

import BorderLine from '../BorderAbsolute';
import FindUserGitHubContext from '../../contexts/gitHub.js';
import { useNavigation } from '@react-navigation/core';


const CardFollow = ({followers}) => {
    const navigation = useNavigation();
    const {getProfileFollow, setShowLoading} = useContext(FindUserGitHubContext);


    const handleFollowProfile = async(name) => {
        await setShowLoading(true);
        await getProfileFollow(name);
        navigation.navigate("FollowProfile");
    }

  return (
      <>
    {
        followers.map((follower,index) => (
            <Container key={index}>
                <ListContainer>
                    <ImageArea>
                     <Img source={{uri: follower.avatar}} />
                    </ImageArea>
                    
                    <BorderLine top={20} left={-52} />
                    <ListTitle>#{follower.login}</ListTitle>
                    <ListButton onPress={() => handleFollowProfile(follower.login)}>
                        <AntDesign name="arrowright" size={28} color="white" />
                    </ListButton>
                </ListContainer>
                <Divider />
            </Container>
        ))
    }
    </>
  );
}

export default CardFollow;
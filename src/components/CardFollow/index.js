import React from 'react';

import { Container,ListContainer,Divider,Img, ListTitle, ListButton,ImageArea } from './styles.js';
import {AntDesign} from '@expo/vector-icons';

import BorderLine from '../BorderAbsolute';

const CardFollow = ({followers}) => {
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
                    <ListButton>
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
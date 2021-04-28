import React, {useRef} from 'react';
import { Dimensions } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useFonts, Roboto_100Thin, Roboto_300Light } from '@expo-google-fonts/roboto';
import {
  Container, Header, UserName, CardLogout, LabelLogout, Avatar, ContainerProfile,
  ImageArea, LabelName, LabelProfileGeneric, ContainerFollowers,
  Followers, NumberFollowers, LabelFollowers, ContainerBiograph, LabelBio, Biograph
} from './styles';

import BorderLine from '../../components/BorderAbsolute';

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

const Home = () => {

 const isCloseToTop = ({layoutMeasurement, contentOffset, contentSize}) => {
    return contentOffset.y == 0;
 }


  const isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
    const paddingToBottom = 0;
    return layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingToBottom;
  };

  const onScrollHandler = ({nativeEvent}) => {
    if(isCloseToTop(nativeEvent)){
     
    
    }
    
    if (isCloseToBottom(nativeEvent)) {
      
    }
  }

  let [fontsLoaded] = useFonts({ Roboto_100Thin, Roboto_300Light });
  const img = 'https://avatars.githubusercontent.com/u/15203010?s=400&u=f873524dcac065be49528b121ca430c98fcb7daa&v=4';
  if (!fontsLoaded) {
    return <Container />;
  }

  return (
    <Container  
      showsVerticalScrollIndicator={false}
      scrollEventThrottle={16}
      onScroll={onScrollHandler}
    >
      <ImageArea>
        <Avatar source={{ uri: img }} />
      </ImageArea>
      <Header>
        <UserName>#programador66</UserName>
        <CardLogout>
          <LabelLogout>Sair</LabelLogout>
          <Ionicons name="exit-outline" size={24} color="red" />
        </CardLogout>
      </Header>

      <ContainerProfile>
        <LabelName>
          CAIO CESAR
        </LabelName>
        <BorderLine  top={98} left={-50} />
        <LabelProfileGeneric>
          kaio.cesr@gmail.com
          </LabelProfileGeneric>
        <LabelProfileGeneric>
          Manaus/AM
          </LabelProfileGeneric>
      </ContainerProfile>

      <ContainerFollowers>
        <Followers>
          <NumberFollowers>
            32
          </NumberFollowers>
          <LabelFollowers>Seguidores</LabelFollowers>
        </Followers>
        <Followers>
          <NumberFollowers>
            32
          </NumberFollowers>
          <LabelFollowers>Seguindo</LabelFollowers>
        </Followers>
        <Followers>
          <NumberFollowers>
            10
          </NumberFollowers>
          <LabelFollowers>Repos</LabelFollowers>
        </Followers>
      </ContainerFollowers>

      <ContainerBiograph>
        <LabelBio>
          BIO
          </LabelBio>
          <BorderLine  top={42} left={-50} />
        <Biograph>
           Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur.
          </Biograph>
      </ContainerBiograph>
    </Container>
  );
}

export default Home;
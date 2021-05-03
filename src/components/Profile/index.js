import React, {useContext} from 'react';
import {Dimensions} from 'react-native';
import FindUserGitHubContext from '../../contexts/gitHub';
import { Ionicons,AntDesign } from '@expo/vector-icons';
import { useFonts, Roboto_100Thin, Roboto_300Light } from '@expo-google-fonts/roboto';
import {
  Container, Header, UserName, CardLogout, LabelLogout, Avatar, ContainerProfile,
  ImageArea, LabelName, LabelProfileGeneric, ContainerFollowers,
  Followers, NumberFollowers, LabelFollowers, ContainerBiograph, LabelBio, Biograph,
  ButtonBack
} from './styles';
import { useNavigation } from '@react-navigation/core';
import BorderLine from '../BorderAbsolute';

const windowWidth = Dimensions.get('window').width;

const Profile = ({ profile, home }) => {
  const navigation = useNavigation();

  if (profile == null )
  return null;

  const {signOut,signIn,setShowLoading} = useContext(FindUserGitHubContext);

  let [fontsLoaded] = useFonts({ Roboto_100Thin, Roboto_300Light });

  if (!fontsLoaded) {
    return <Container />;
  }

  const handleSignOut = () => {
    signOut();
  }


  const handleSaveNewProfile = async () => {
    setShowLoading(true);
    await signIn(profile.login);

    navigation.navigate("Home");
  }

  return (
    <Container>
      <ImageArea screenWidth={windowWidth != null ? windowWidth : 0 }>
        <Avatar source={{ uri: profile.avatar }} />
      </ImageArea>
      <Header>
        {
          !home && <ButtonBack onPress={() => navigation.goBack()}>
                      <AntDesign name="arrowleft" size={28} color="white" />
                    </ButtonBack>
        }


        <UserName>#{profile.nome}</UserName>
        
          {
            home ?
              <CardLogout onPress={handleSignOut}>
                <LabelLogout>Sair</LabelLogout>
                <Ionicons name="exit-outline" size={24} color="red" />
              </CardLogout>
              :
              <CardLogout onPress={handleSaveNewProfile}>
                  <LabelLogout>Salvar</LabelLogout>
                  <Ionicons name="ios-enter-outline" size={24} color="green" />
              </CardLogout>
          }

      </Header>

      <ContainerProfile>
        <LabelName>
          {profile.nome}
        </LabelName>
        <BorderLine top={98} left={-50} />
        <LabelProfileGeneric>
          {profile.email}
        </LabelProfileGeneric>
        <LabelProfileGeneric>
          {profile.location}
        </LabelProfileGeneric>
      </ContainerProfile>

      <ContainerFollowers>
        <Followers>
          <NumberFollowers>
            {profile.seguidores}
          </NumberFollowers>
          <LabelFollowers>Seguidores</LabelFollowers>
        </Followers>
        <Followers>
          <NumberFollowers>
            {profile.seguindo}
          </NumberFollowers>
          <LabelFollowers>Seguindo</LabelFollowers>
        </Followers>
        <Followers>
          <NumberFollowers>
            {profile.repositorios}
          </NumberFollowers>
          <LabelFollowers>Repos</LabelFollowers>
        </Followers>
      </ContainerFollowers>

      <ContainerBiograph>
        <LabelBio>
          BIO
          </LabelBio>
        <BorderLine top={42} left={-50} />
        <Biograph>
          {profile.bio}
        </Biograph>
      </ContainerBiograph>
    </Container>
  );
}

export default Profile;
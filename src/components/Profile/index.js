import React, {useRef} from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useFonts, Roboto_100Thin, Roboto_300Light } from '@expo-google-fonts/roboto';
import {
  Container, Header, UserName, CardLogout, LabelLogout, Avatar, ContainerProfile,
  ImageArea, LabelName, LabelProfileGeneric, ContainerFollowers,
  Followers, NumberFollowers, LabelFollowers, ContainerBiograph, LabelBio, Biograph
} from './styles';

import BorderLine from '../BorderAbsolute';

const Profile = ({profile}) => {

  let [fontsLoaded] = useFonts({ Roboto_100Thin, Roboto_300Light });
  const img = 'https://avatars.githubusercontent.com/u/15203010?s=400&u=f873524dcac065be49528b121ca430c98fcb7daa&v=4';
  if (!fontsLoaded) {
    return <Container />;
  }

  return (
    <Container>
      <ImageArea>
        <Avatar source={{ uri: profile.avatar }} />
      </ImageArea>
      <Header>
        <UserName>#{profile.nome}</UserName>
        <CardLogout>
          <LabelLogout>Sair</LabelLogout>
          <Ionicons name="exit-outline" size={24} color="red" />
        </CardLogout>
      </Header>

      <ContainerProfile>
        <LabelName>
        {profile.nome}
        </LabelName>
        <BorderLine  top={98} left={-50} />
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
          <BorderLine  top={42} left={-50} />
        <Biograph>
           {profile.bio}
          </Biograph>
      </ContainerBiograph>
    </Container>
  );
}

export default Profile;
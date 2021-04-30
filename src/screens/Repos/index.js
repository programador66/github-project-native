import React, { useContext, useEffect, useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Container, Header, ButtonBack, NumberRepositories, ListContainer,ListContainerGeral,
     ListTitle, ListDescription,Divider, ListBottom, BottomStars,NumberStars,BottomIconsCloseOpen } from './styles';
import { Feather } from '@expo/vector-icons'; 
import BorderLine from '../../components/BorderAbsolute';
import FindUserGitHubContext from '../../contexts/gitHub';

import Api from '../../services/index';

  async  function getReposUserGitHub(name){
    
    const response = await Api.get(`/users/${name}/repos`);
   
    return response;
  }

const Repos = () => {

    const navigation = useNavigation();

    const {profile, setShowLoading} = useContext(FindUserGitHubContext);
    if (profile == null )
    return null;
    
    const [repositorios, setRepositorios] = useState([]);

    useEffect(() => {
        setShowLoading(true);
        getReposUserGitHub(profile.login).then(res => {
            const githubRepositories = res.data;

            const repos = githubRepositories.map(repos => {
                return {
                    repo: repos.name,
                    id: repos.id,
                    stars: repos.stargazers_count,
                    description: repos.description
                }
            })

            setRepositorios(repos);
            setShowLoading(false);
        }).catch(e => console.log(e.response));

    },[profile]);

    return (
        <Container>
            <Header>
                <ButtonBack onPress={() => navigation.navigate("Home")}>
                    <AntDesign name="arrowleft" size={28} color="white" />
                </ButtonBack>
                <NumberRepositories>
                    {repositorios.length} Repositórios
                </NumberRepositories>
            </Header>
            {
               repositorios.map(repo => (
                <ListContainerGeral key={repo.id}>
                    <ListContainer>
                        <ListTitle>
                            {repo.repo}
                        </ListTitle>
                        <BorderLine  top={17} left={-50} />
                        <ListDescription>
                            {repo.description != null ? repo.description : "No description for this repositorie"}
                        </ListDescription>
                        <ListBottom>
                            <BottomStars>
                                <Feather name="star" size={24} color="#FFCE00" />
                                <NumberStars>{repo.stars}</NumberStars>
                            </BottomStars>

                            <BottomIconsCloseOpen>
                                <Feather name="lock" size={18} color="#63BF1F" />
                                <Feather name="unlock" size={18} color="#CC042A" style={{marginLeft: 6}} />
                            </BottomIconsCloseOpen>
                        </ListBottom>
                       
                    </ListContainer>
                    <Divider />
                </ListContainerGeral>
               )
            )
            }
        </Container>
    );
}

export default Repos;
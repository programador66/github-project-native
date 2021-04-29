import React, {useContext,useState} from 'react';
import { Container, LabelName,InputName, ButtonLogin,FormContainer } from './styles';
import { AntDesign } from '@expo/vector-icons';

import FindUserGitHubContext from '../../contexts/gitHub';

const Login = () => {
 
    const [inputName , setInputName] = useState("");

    const {signIn} = useContext(FindUserGitHubContext);
    const handleSignClick = () =>{
        if (inputName != "") {
            signIn(inputName);
        } else {
            alert("Favor preencher o nome para a busca!")
        }
           
    }
    return (
        <Container>
            <AntDesign name="github" size={95} color="#FFCE00" />

            <FormContainer>
                <InputName 
                    placeholder="Usuário" 
                    value={inputName}
                    onChangeText={t => setInputName(t)}
                />

                <ButtonLogin onPress={handleSignClick}>
                    <LabelName>ENTRAR</LabelName>
                    <AntDesign name="arrowright" size={24} color="black" />
                </ButtonLogin>
            </FormContainer>

            
        </Container>
    );
}

export default Login;
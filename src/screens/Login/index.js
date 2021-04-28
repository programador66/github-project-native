import React from 'react';
import { Container, LabelName,InputName, ButtonLogin,FormContainer } from './styles';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
    const navigation = useNavigation();
    
    const handleSignClick = async() =>{
        
        navigation.reset({
            routes: [{name: 'Navigation'}] 
        })
    
    }
    return (
        <Container>
            <AntDesign name="github" size={95} color="#FFCE00" />

            <FormContainer>
                <InputName placeholder="Usuário" />

                <ButtonLogin onPress={handleSignClick}>
                    <LabelName>ENTRAR</LabelName>
                    <AntDesign name="arrowright" size={24} color="black" />
                </ButtonLogin>
            </FormContainer>

            
        </Container>
    );
}

export default Login;
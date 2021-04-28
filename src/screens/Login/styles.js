import React from 'react'
import styled from 'styled-components/native';


export const Container = styled.SafeAreaView`
    flex:1;
    justify-content: center;
    align-items: center;
    background: #292929;
`;

export const FormContainer = styled.View`
  padding: 15px;
  width: 100%;
`;

export const InputName = styled.TextInput`
    margin-top: 25px;
    font-size: 20px;
    width: 100%;
    background: #fff;
    height: 56px;
    border-radius: 10px;
    padding-left: 15px;
`;
export const ButtonLogin = styled.TouchableOpacity`
    flex-direction: row;
    margin-top: 25px;
    height: 60px;
    background-color: #FFCE00;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
`;

export const LabelName = styled.Text`
    margin-right: 10px;
    color:  #030202;
    font-size: 20px;
    font-weight: bold;
`;
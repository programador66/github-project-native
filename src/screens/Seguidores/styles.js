import React from 'react';
import styled from 'styled-components/native';


export const Container = styled.ScrollView`

`;

export const Header = styled.View`
    justify-content: center;
    align-items: center;
    flex-direction: row;
    height: 63px;
    background: #1F1F1F;
    margin-bottom: 10%;
`;

export const ButtonBack = styled.TouchableOpacity`
    align-self: center;
    margin-left: 10px;
    width: 30px;
    border-radius: 15px;
`;

export const NumberSeguidores = styled.Text`
    align-self: center;
    flex-grow: 2;
    margin-left: 28%;
    color: #FFF;
    font-size: 17px;
    font-weight: bold;
`;
import React from 'react';

import styled from 'styled-components/native'
import {useFonts, Roboto_100Thin} from '@expo-google-fonts/roboto';

export const Container = styled.ScrollView`
    position: relative;
    background: #292929;
    flex: 1;
`;

export const Header = styled.View`
    padding-top: 21px;
    padding-left: 11px;
    padding-right: 20px;
    height: 118px;
    flex-direction: row;
    justify-content: space-between;
    background: #1F1F1F;
`;

export const UserName = styled.Text`
    color: #FFFFFF;
    font-size: 17px;
    font-weight: bold;
`;

export const CardLogout = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: space-between;
`;

export const LabelLogout = styled.Text`
    color: #fff;
    font-size: 17px;
    margin-right: 8px;
    font-family: Roboto_300Light;
`;
export const ImageArea = styled.View` 
    position: absolute;
    z-index: 1;
    align-self: center;
    top: 60px;
    right: ${({screenWidth}) => ((screenWidth / 2) - 64)}px;
    border: 3px solid #fff;
    border-radius: 66px;
`;

export const Avatar = styled.Image`
    width: 114px;
    height: 114px;
    border-radius: 56px; 
`;

export const ContainerProfile = styled.View`
    flex:1;
    padding-left: 24px;
   
`;

export const LabelName = styled.Text`
    margin-top: 100px;
    color: #fff;
    font-size: 26px;
    font-family: Roboto_100Thin;
    font-weight: bold;
    position: relative;
`;

export const LabelProfileGeneric = styled.Text`
    color: #fff;
    font-size: 18px;
    font-family: Roboto_100Thin;
    margin-top: 2px;
`;

export const BorderLine = styled.View`
    height: 42px;
    width: 60px;
    background: #FFCE00;
    border-radius: 8px;
    position: absolute;
    left: -50px;
    top: 98px;
`;

export const ContainerFollowers = styled.View`
    padding-bottom: 5px;
    margin-top: 28px;
    height: 97px;
    background: #5252525D;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`;

export const Followers = styled.View`
    justify-content: center;
    align-items: center;
`;

export const NumberFollowers = styled.Text`
    font-size: 40px;
    color: #fff;
    font-weight: bold;
`

export const LabelFollowers = styled.Text`
    font-size: 17px;
    color: #FFFFFF;
    font-family: Roboto_300Light;
`;

export const ContainerBiograph = styled.View`
    padding-left: 24px;
`;
export const LabelBio = styled.Text`
    margin-top: 46px;
    color: #fff;
    font-size: 26px;
    font-family: Roboto_100Thin;
    font-weight: bold;
    position: relative;
`;

export const Biograph = styled.Text`
    color: #fff;
    font-size: 18px;
    font-family: Roboto_100Thin;
    margin-top: 10px;
    margin-bottom: 80px;
`;
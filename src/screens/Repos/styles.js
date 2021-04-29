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

export const NumberRepositories = styled.Text`
    align-self: center;
    flex-grow: 2;
    margin-left: 25%;
    color: #FFF;
    font-size: 17px;
    font-weight: bold;
`;

export const ListContainer = styled.View`
    padding-top:24px;
    padding-left: 20px;
    height: 151px;
`;

export const ListTitle = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: #FFF;
`;

export const ListDescription = styled.Text`
    margin-top: 8px;
    color: #FFF;
`;


export const Divider = styled.View`
   width: 100%;
   height: 1px;
   background: rgba(255,255,255,0.4);
   margin-bottom: 2%;
`;

export const ListBottom = styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding-top: 12px;
    padding-right: 8px;
`;

export const BottomStars = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const NumberStars = styled.Text`
    color: #fff;
    margin-left: 6px;
`;

export const BottomIconsCloseOpen = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;
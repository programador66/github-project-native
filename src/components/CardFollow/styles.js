import React from 'react';
import styled from 'styled-components/native';


export const Container = styled.View`
    
`;

export const ListContainer = styled.View`
    padding:24px;
    height: 89px;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
`;

export const Divider = styled.View`
   margin-top: 4%;
   width: 100%;
   height: 1px;
   background: rgba(255,255,255,0.4);
   margin-bottom: 3%;
`;

export const ImageArea = styled.View` 
    border: 3px solid #fff;
    border-radius: 47px;
    position: relative;
`;

export const Img = styled.Image`
    width: 74px;
    height: 74px;
    border-radius: 37px;
`;
export const ListTitle = styled.Text`
    color: #FFF;
    font-size: 16px;
    font-weight: bold;
`;
export const ListButton = styled.TouchableOpacity``;
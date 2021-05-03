import React from 'react';
import styled from 'styled-components/native';

import Load from '../../assets/spinner2.gif';

const Container = styled.View`
    height: 100%;
    width: 100%;
    position: absolute;
    z-index: 300;
    top: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.5);
    justify-content: center;
    align-items: center;
`;

const Img = styled.Image`
    height: 80px;
    width: 80px;
    z-index: 300;
`;

const LabelLoading = styled.Text`
    font-size: 17px;
    color: #fff;
`;

const Loading = () => {
  return (
      <Container>
          <Img source={Load} />
          <LabelLoading>Carregando ...</LabelLoading>
      </Container>
  );
}

export default Loading;
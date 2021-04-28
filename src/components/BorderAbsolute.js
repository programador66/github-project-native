import React from 'react';

import styled from 'styled-components/native';

const BorderLine = styled.View`
    height: 42px;
    width: 60px;
    background: #FFCE00;
    border-radius: 8px;
    position: absolute;
    left: ${({left}) => left}px;
    top: ${({top}) => top}px;
`;

const BorderAbsolute = ({top,left}) => {
  return <BorderLine top={top} left={left} />;
}

export default BorderAbsolute;
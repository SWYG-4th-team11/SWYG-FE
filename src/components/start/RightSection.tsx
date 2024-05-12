import Image from 'next/image';
import React from 'react';
import styled from '@emotion/styled';

const ImageSection = styled.section({
  flexBasis: '50%',
  display: 'flex',
  justifyContent: 'center',
});

const RightSection = () => (
  <ImageSection>
    <Image src="ball.svg" alt="Green Circle" width={200} height={200} />
  </ImageSection>
);

export default RightSection;

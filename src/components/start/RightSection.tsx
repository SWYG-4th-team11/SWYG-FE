import Image from 'next/image';
import React from 'react';
import { ImageSection } from '@/styles/start/rightStyles';

const RightSection = () => (
  <ImageSection>
    <Image src="ball.svg" alt="Green Circle" width={200} height={200} />
  </ImageSection>
);

export default RightSection;

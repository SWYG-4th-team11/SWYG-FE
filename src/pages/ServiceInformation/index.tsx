import React, { useCallback, useState } from 'react';
import styled from '@emotion/styled';

import { useRouter } from 'next/router';
import First from '@/components/serviceInformation/first';
import Seconds from '@/components/serviceInformation/seconds';
import ResponsiveLayout from '@/layouts/ResponsiveLayout/ResponseiveLayout';
import Third from '@/components/serviceInformation/third';
import Fourth from '@/components/serviceInformation/fourth';

const Container = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '4rem',
  backgroundColor: theme.colors.gray[6],
  height: '100vh',
}));

const NextButton = styled.button(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  backgroundColor: theme.colors.green[0],
  borderRadius: '40px',
  color: theme.colors.white,
  gap: '16px',
  justifyContent: 'center',
  padding: '20px 24px',
  width: '900px',
  cursor: 'pointer',
  fontSize: theme.typography.title2.fontSize,
  fontWeight: theme.typography.title2.fontWeight,
  lineHeight: `${theme.typography.title2.lineHeight}px`,
  marginTop: '3rem',
  border: 'none',
}));

const ServiceInformation = () => {
  const router = useRouter();
  const [step, setStep] = useState<number>(1);

  const onNextClick = useCallback(() => {
    if (step === 4) {
      router.push('/service'); // 4번째 단계일 때 'service' 페이지로 이동
    } else {
      setStep((prev) => prev + 1);
    }
  }, [step, setStep, router]);

  const getNextButtonText = (currentStep: number) => {
    switch (currentStep) {
      case 1:
        return '다음으로';
      case 2:
        return '이용방법 확인하기';
      case 3:
        return '다음으로';
      case 4:
        return '시작하기';
      default:
        return '완료';
    }
  };

  return (
    <ResponsiveLayout>
      <Container>
        {step === 1 && <First />}
        {step === 2 && <Seconds />}
        {step === 3 && <Third />}
        {step === 4 && <Fourth />}
        <NextButton onClick={onNextClick}>{getNextButtonText(step)}</NextButton>
      </Container>
    </ResponsiveLayout>
  );
};

export default ServiceInformation;

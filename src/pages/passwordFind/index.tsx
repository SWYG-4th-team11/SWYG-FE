import React, { useState } from 'react';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import ResponsiveLayout from '@/layouts/ResponsiveLayout/ResponseiveLayout';
import OneStep from '@/components/passwordFind/oneStep';
import TwoStep from '@/components/passwordFind/twoStep';
import PasswordResult from '@/components/passwordFind/passwordResult';
import { NextButton } from '@/components/common/Button';

interface StepProps {
  active: boolean;
  onClick: () => void;
}
const Container = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '4rem',
  backgroundColor: theme.colors.gray[6],
  height: '100vh',
  position: 'relative',
}));

const StepsContainer = styled.div`
  position: absolute;
  top: 60px;
  right: 100px;
  display: flex;
`;

const Step = styled.div<StepProps>`
  font-size: 0.875rem;
  color: ${({ active }) => (active ? '#03C75A' : '#191919')};
  border-radius: 0.5rem;
  margin-right: 0.5rem;

  &:last-of-type {
    margin-right: 0;
  }
`;

const PasswordFind = () => {
  const [currentStep, setCurrentStep] = useState<number>(1); // 초기 단계 설정
  const [success, setSuccess] = useState<boolean>(false); // 성공 여부

  const router = useRouter();

  const onClick = () => {
    setCurrentStep((prev) => prev + 1);
    if (currentStep === 2) {
      setSuccess(true);
    }
    if (success) router.push('/login');
  };

  const getButtonText = () => {
    if (success) {
      return '로그인 화면으로 돌아가기';
    }
    if (currentStep === 1) {
      return '인증하기';
    }
    return '변경완료';
  };

  return (
    <ResponsiveLayout>
      <Container>
        {success ? (
          <PasswordResult />
        ) : (
          <>
            <StepsContainer>
              <Step
                active={currentStep === 1}
                onClick={() => setCurrentStep(1)}
              >
                01 본인확인 &gt;
              </Step>
              <Step
                active={currentStep === 2}
                onClick={() => setCurrentStep(2)}
              >
                02 비밀번호 재설정
              </Step>
            </StepsContainer>
            {currentStep === 1 ? <OneStep /> : <TwoStep />}
          </>
        )}
        <NextButton onClick={onClick}>{getButtonText()}</NextButton>
      </Container>
    </ResponsiveLayout>
  );
};

export default PasswordFind;

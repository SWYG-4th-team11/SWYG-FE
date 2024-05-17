import React, { useState } from 'react';
import styled from '@emotion/styled';
import {
  GreenSmallButton,
  NextButton,
  WhiteSmallButton,
} from '@/components/common/Button';
import { Input, InputWrapper, WrapperTitle } from '@/styles/login/loginStyles';

// 태그 데이터 타입 정의
interface Tag {
  id: number;
  name: string;
}

const Container = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '4rem', // 필요에 따라 조정하세요.
  backgroundColor: theme.colors.white[0], // 테마의 회색 색상 사용
  height: '100vh', // 전체 높이
}));

const LineWrppaer = styled.div(({ theme }) => ({
  width: '640px',
  hegith: '30px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '12px',
  '.line': {
    backgroundColor: theme.colors.green[0],
    width: '600px',
    height: '8px',
  },

  '.number': {
    color: theme.colors.gray[1],
  },
}));

const TitleWrapper = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '490px',
  height: '148px',
  textAlign: 'center',
  marginTop: '50px',
  gap: '8px',

  '.title': {
    fontSize: theme.typography.title1.fontSize,
    fontWeight: theme.typography.title1.fontWeight,
    lineHeight: `${theme.typography.title1.lineHeight}px`,
  },

  '.description': {
    fontSize: theme.typography.text2.fontSize,
    fontWeight: theme.typography.text2.fontWeight,
    lineHeight: `${theme.typography.text2.lineHeight}px`,
    color: theme.colors.gray[0],
  },
}));

const BoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

const Row = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 10px;
  margin-bottom: 10px;
`;

const TagButton = styled.button<{ isSelected?: boolean }>(
  ({ theme, isSelected }) => ({
    border: '1px solid', // 테두리 색상
    borderColor: isSelected ? theme.colors.green[0] : theme.colors.gray[4], // 선택 여부에 따라 색상 변경
    backgroundColor: '#fff',
    gap: '10px',
    padding: '32px 30px',
    cursor: 'pointer',
    height: '60px',
    borderRadius: '32px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '&:hover': {
      backgroundColor: '#d0d0d0',
    },
    color: theme.colors.gray[1], // 예시로 theme에서 text color를 사용
    fontSize: theme.typography.text2.fontSize,
    fontWeight: theme.typography.text2.fontWeight,
    lineHeight: `${theme.typography.text2.lineHeight}px`,
    position: 'relative',
  })
);

const AddButton = styled(TagButton)`
  color: green;
  border: 1px solid green;
  /* padding: 32px 30px; */
  width: 120px;
`;
const OrderIndicator = styled.div`
  position: absolute;
  top: -10px;
  left: -10px;
  width: 32px;
  height: 32px;
  background-color: ${(props) => props.theme.colors.green[0]};
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  pointer-events: none; // 이벤트 차단
`;

const Description = styled.div(({ theme }) => ({
  fontSize: theme.typography.text3.fontSize,
  fontWeight: theme.typography.text3.fontWeight,
  lineHeight: `${theme.typography.text3.lineHeight}px`,
  color: theme.colors.gray[4],
  marginTop: '50px',
}));

const BtnWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 900px;
  margin-top: 50px;
`;
const Service = () => {
  const [step, setStep] = useState<number>(1);
  const [selectedTags, setSelectedTags] = useState<number[]>([]);
  const [title, setTitle] = useState<string>('');
  const [due, setDue] = useState<string>('');
  const [memo, setMemo] = useState<string>('');
  const [tags, setTags] = useState<Tag[]>([
    { id: 1, name: '#디자인' },
    { id: 2, name: '#해외 여행' },
    { id: 3, name: '#데이터 분석' },
    { id: 4, name: '#쇼핑' },
    { id: 5, name: '#이직' },
    { id: 6, name: '#코딩' },
    { id: 7, name: '#연애' },
    { id: 8, name: '#가족' },
    { id: 9, name: '#시험' },
    { id: 10, name: '#데이터 분석' },
  ]);

  const handleAddTag = () => {
    const newId = tags.length + 1;
    setTags([...tags, { id: newId, name: `#태그${newId}` }]);
  };

  const handleTagClick = (id: number) => {
    setSelectedTags((prev) =>
      prev.includes(id) ? prev.filter((t) => t !== id) : [...prev, id]
    );
  };

  const onNext = () => {
    setStep((prev) => prev + 1);
  };
  const onPrev = () => {
    setStep((prev) => prev - 1);
  };

  const onSubmit = () => {
    console.log('submit');
    console.log(selectedTags);
    console.log(title);
    console.log(due);
    console.log(memo);
  };

  return (
    <Container>
      <LineWrppaer>
        <div className="line" />
        <span className="number">
          {step}
          /2
        </span>
      </LineWrppaer>

      <TitleWrapper>
        <h1 className="title">
          {step === 1 ? '내 관심 분야 설정' : '다신의 목표를 알려주세요!'}
        </h1>
        <p className="description">
          {step === 1
            ? '내가 달성하길 원하는 목표의 분야를 선택 해주세요!'
            : '만다라트 달성표를 통해 이루고 싶은 목표를 작성 해 주세요!'}
        </p>
        {step === 1 && (
          <p className="description">최대 3개까지 선택할 수 있어요.</p>
        )}
      </TitleWrapper>

      {step === 1 ? (
        <BoxWrapper>
          <Row>
            {tags.slice(0, 4).map((tag) => (
              <TagButton
                key={tag.id}
                isSelected={selectedTags.includes(tag.id)}
                onClick={() => handleTagClick(tag.id)}
              >
                {tag.name}
                {selectedTags.includes(tag.id) && (
                  <OrderIndicator>
                    {selectedTags.indexOf(tag.id) + 1}
                  </OrderIndicator>
                )}
              </TagButton>
            ))}
          </Row>
          <Row>
            {tags.slice(4, 7).map((tag) => (
              <TagButton
                key={tag.id}
                isSelected={selectedTags.includes(tag.id)}
                onClick={() => handleTagClick(tag.id)}
              >
                {tag.name}
                {selectedTags.includes(tag.id) && (
                  <OrderIndicator>
                    {selectedTags.indexOf(tag.id) + 1}
                  </OrderIndicator>
                )}
              </TagButton>
            ))}
          </Row>
          <Row>
            {tags.slice(7, 10).map((tag) => (
              <TagButton
                key={tag.id}
                isSelected={selectedTags.includes(tag.id)}
                onClick={() => handleTagClick(tag.id)}
              >
                {tag.name}
                {selectedTags.includes(tag.id) && (
                  <OrderIndicator>
                    {selectedTags.indexOf(tag.id) + 1}
                  </OrderIndicator>
                )}
              </TagButton>
            ))}
            <AddButton onClick={handleAddTag}>+</AddButton>
          </Row>
        </BoxWrapper>
      ) : (
        <InputWrapper className="div-3">
          <WrapperTitle>목표이름</WrapperTitle>
          <div className="div-4">
            <Input
              placeholder="15자 이내로 입력해주세요."
              type="email"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <WrapperTitle>마감일</WrapperTitle>
          <div className="div-4">
            <Input
              placeholder="아이디(이메일)"
              type="date"
              value={due}
              onChange={(e) => setDue(e.target.value)}
            />
          </div>
          <WrapperTitle>메모(필수X)</WrapperTitle>
          <div className="div-4">
            <Input
              placeholder="메모를 입력 해주세요."
              type="email"
              value={memo}
              onChange={(e) => setMemo(e.target.value)}
            />
          </div>
        </InputWrapper>
      )}

      {step === 1 && (
        <Description>관심 목표는 나중에 다시 수정가능해요!</Description>
      )}
      {step === 1 ? (
        <NextButton onClick={onNext}>다음으로</NextButton>
      ) : (
        <BtnWrapper>
          <WhiteSmallButton onClick={onPrev}>이전으로</WhiteSmallButton>
          <GreenSmallButton onClick={onSubmit}>시작하기</GreenSmallButton>
        </BtnWrapper>
      )}
    </Container>
  );
};

export default Service;

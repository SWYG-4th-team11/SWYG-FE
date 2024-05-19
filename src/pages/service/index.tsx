import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { useSetRecoilState } from 'recoil';
import { useRouter } from 'next/router';
import {
  GreenSmallButton,
  NextButton,
  WhiteSmallButton,
} from '@/components/common/Button';
import { Input, InputWrapper, WrapperTitle } from '@/styles/login/loginStyles';
import {
  Container,
  LineWrppaer,
  TitleWrapper,
  BoxWrapper,
  Row,
  TagButton,
  AddButton,
  OrderIndicator,
  Description,
  BtnWrapper,
} from '@/styles/service/serviceStyles';
import ResponsiveLayout from '@/layouts/ResponsiveLayout/ResponseiveLayout';
import AuthStore from '@/store/auth/authStore';
import { GetLoginUser } from '../api/auth/authApi';
import AddModalTag from '@/components/service/AddModalTag';
import { useCustomMutation } from '@/hooks/reactQueryHooks/reactQueryHooks';

// 태그 데이터 타입 정의
interface Tag {
  id: number;
  name: string;
}

const Service = () => {
  const [id, setId] = useState<number | undefined>(undefined);
  const setAuthData = useSetRecoilState(AuthStore);
  // const [authData, setAuthData] = useRecoilState(AuthStore);
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [step, setStep] = useState<number>(1);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
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
    { id: 10, name: '#수학' },
  ]);

  useEffect(() => {
    const storedId = localStorage.getItem('id');
    if (storedId) {
      setId(Number(storedId));
    } else {
      router.push('/');
    }
  }, []);

  const { data: LoginUserData } = GetLoginUser(
    { id: Number(id) },
    {
      enabled: id !== undefined,
      queryKey: ['user', { id: Number(id) }],
    }
  );

  useEffect(() => {
    if (LoginUserData) {
      setAuthData({
        isLogin: true,
        id: LoginUserData.id,
        email: LoginUserData.email,
        nickname: LoginUserData.nickname,
        createdAt: LoginUserData.createdAt,
        updatedAt: LoginUserData.updatedAt,
        level: LoginUserData.level,
        exp: LoginUserData.exp,
        mandalartExists: LoginUserData.mandalartExists,
        mandalartId: LoginUserData.mandalartId,
      });
    }
  }, [LoginUserData, setAuthData]);

  const handleAddTag = () => {
    const newId = tags.length + 1;
    setTags([...tags, { id: newId, name: `#태그${newId}` }]);
  };

  const handleTagClick = (name: string) => {
    setSelectedTags((prev) =>
      prev.includes(name) ? prev.filter((t) => t !== name) : [...prev, name]
    );
  };

  const onNext = () => {
    setStep((prev) => prev + 1);
  };
  const onPrev = () => {
    setStep((prev) => prev - 1);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const { mutate: mandalartMutate } = useCustomMutation('post', 'mandalart', {
    onSuccess: () => {
      router.push('/main');
    },
    onError: (error) => {
      alert('목표 생성에 실패했습니다.');
      console.error(error);
    },
  });

  const onSubmit = () => {
    console.log('submit');
    console.log(selectedTags);
    console.log(title);
    console.log(due);
    console.log(memo);

    const dueDate = new Date(due);
    const dueISOString = dueDate.toISOString();

    console.log('ISO 형식의 마감일:', dueISOString);

    if (selectedTags.length === 0) {
      alert('관심 분야를 선택해주세요.');
    } else if (title === '') {
      alert('목표 이름을 입력해주세요.');
    } else if (due === '') {
      alert('마감일을 입력해주세요.');
    } else if (memo === '') {
      alert('메모를 입력해주세요.');
    } else {
      mandalartMutate({
        title,
        memo,
        categories: selectedTags,
        // userId: authData.id,
        userId: id,
        due: dueISOString,
      });
    }
  };

  return (
    <ResponsiveLayout>
      <Head>
        <title>만다르트 서비스</title>
        <meta name="description" content="만다라트 서비스 페이지" />
        <meta name="keywords" content="만다라트,mandalart,service,start" />
      </Head>
      ;
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
                  isSelected={selectedTags.includes(tag.name)}
                  onClick={() => handleTagClick(tag.name)}
                >
                  {tag.name}
                  {selectedTags.includes(tag.name) && (
                    <OrderIndicator>
                      {selectedTags.indexOf(tag.name) + 1}
                    </OrderIndicator>
                  )}
                </TagButton>
              ))}
            </Row>
            <Row>
              {tags.slice(4, 7).map((tag) => (
                <TagButton
                  key={tag.id}
                  isSelected={selectedTags.includes(tag.name)}
                  onClick={() => handleTagClick(tag.name)}
                >
                  {tag.name}
                  {selectedTags.includes(tag.name) && (
                    <OrderIndicator>
                      {selectedTags.indexOf(tag.name) + 1}
                    </OrderIndicator>
                  )}
                </TagButton>
              ))}
            </Row>
            <Row>
              {tags.slice(7, 10).map((tag) => (
                <TagButton
                  key={tag.id}
                  isSelected={selectedTags.includes(tag.name)}
                  onClick={() => handleTagClick(tag.name)}
                >
                  {tag.name}
                  {selectedTags.includes(tag.name) && (
                    <OrderIndicator>
                      {selectedTags.indexOf(tag.name) + 1}
                    </OrderIndicator>
                  )}
                </TagButton>
              ))}
              <AddButton onClick={openModal}>+</AddButton>
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

        {isModalOpen && (
          <AddModalTag
            selectedTags={selectedTags}
            setSelectedTags={setSelectedTags}
            onClose={closeModal}
            handleAddTag={handleAddTag}
          />
        )}
      </Container>
    </ResponsiveLayout>
  );
};

export default Service;

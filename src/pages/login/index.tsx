// import React, { ChangeEvent, useState } from 'react';
// import Head from 'next/head';
// import { useRouter } from 'next/router';
// import Image from 'next/image';
// import { useSetRecoilState } from 'recoil';
// import ResponsiveLayout from '@/layouts/ResponsiveLayout/ResponseiveLayout';
// import {
//   Container,
//   TitleBox,
//   LoginBox,
//   LoginBoxTop,
//   InputWrapper,
//   WrapperTitle,
//   Input,
//   Line,
//   ButtonWrapper,
//   SocialIconsWrapper,
//   EasyLoginLine,
//   BottomBox,
// } from '@/styles/login/loginStyles';
// import { useCustomMutation } from '@/hooks/reactQueryHooks/reactQueryHooks';
// import { Api } from '@/utils/apis';
// import { ILoginResultType } from '@/types/loginType';
// import AuthStore from '@/store/auth/authStore';

// const Login = () => {
//   const setAuthData = useSetRecoilState(AuthStore);
//   const router = useRouter();

//   const onJoinPage = () => {
//     router.push('/join');
//   };

//   const onPasswordPage = () => {
//     router.push('/password');
//   };

//   const [email, setEmail] = useState<string>('');
//   const [password, setPassword] = useState<string>('');

//   const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
//     setEmail(e.target.value);
//   };

//   const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
//     setPassword(e.target.value);
//   };

//   const { mutate: loginMutate } = useCustomMutation('post', '/user/login', {
//     onSuccess: (data: ILoginResultType) => {
//       console.log(data);
//       if (data.result === 'ok') {
//         Api.addToken(data.detail.token);
//         Api.addId(data.detail.id);
//         setAuthData({
//           isLogin: true,
//           id: data.detail.id,
//           email: data.detail.email,
//           nickname: data.detail.nickname,
//           createdDateTime: data.detail.createdDateTime,
//         });
//         router.push('/main');
//       }
//     },
//     onError: (error) => {
//       console.error(error);
//     },
//   });

//   const onSubmit = () => {
//     loginMutate({ email, password });
//   };

//   return (
//     <ResponsiveLayout>
//       <Head>
//         <title>만다르트 로그인</title>
//         <meta name="description" content="만다라트 로그인" />
//         <meta name="keywords" content="만다라트,mandalart,login" />
//       </Head>
//       ;
//       <Container>
//         <TitleBox>
//           <Image
//             src="headerLogo.svg"
//             alt="header_logo"
//             width={181}
//             height={78.02}
//           />
//         </TitleBox>
//         <LoginBox>
//           <LoginBoxTop>
//             <div className="div-2">
//               <InputWrapper className="div-3">
//                 <WrapperTitle>로그인</WrapperTitle>
//                 <div className="div-4">
//                   <Input
//                     placeholder="아이디(이메일)"
//                     type="email"
//                     value={email}
//                     onChange={onChangeEmail}
//                   />
//                   <Input
//                     placeholder="비밀번호"
//                     type="password"
//                     value={password}
//                     onChange={onChangePassword}
//                   />
//                 </div>
//               </InputWrapper>
//               <Line>
//                 <div className="div-5" />
//               </Line>
//             </div>

//             <ButtonWrapper onClick={onSubmit}>
//               <button type="button" className="text-wrapper-3">
//                 로그인
//               </button>
//             </ButtonWrapper>
//           </LoginBoxTop>

//           <SocialIconsWrapper className="div-6">
//             <EasyLoginLine className="div-7">
//               <div className="rectangle" />
//               <div className="div-wrapper-3">
//                 <div className="text-wrapper-4">간편로그인</div>
//               </div>
//               <div className="tectangle-2" />
//             </EasyLoginLine>
//             <div className="div-8">
//               <Image
//                 src="wavve.svg"
//                 alt="KaoKao_Login"
//                 width={72}
//                 height={72}
//               />
//               <Image
//                 src="frame.svg"
//                 alt="Google_Login"
//                 width={72}
//                 height={72}
//               />
//             </div>
//           </SocialIconsWrapper>
//         </LoginBox>

//         <BottomBox>
//           <div className="text-wrapper">키워유가 처음이세요?</div>
//           <div
//             className="div"
//             onClick={onJoinPage}
//             role="button"
//             tabIndex={0}
//             onKeyDown={onJoinPage}
//           >
//             회원가입
//           </div>
//         </BottomBox>
//         <BottomBox>
//           <div className="text-wrapper">비밀번호를 잊으셨나요?</div>
//           <div
//             className="div"
//             onClick={onPasswordPage}
//             role="button"
//             tabIndex={0}
//             onKeyDown={onPasswordPage}
//           >
//             비밀번호 찾기
//           </div>
//         </BottomBox>
//       </Container>
//     </ResponsiveLayout>
//   );
// };

// export default Login;

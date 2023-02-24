import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import SignUpPage from '../pages/SignUpPage';
import useSignUpViewModel from '../viewmodels/SignUpViewModel';

const SignUpContainer = () => {
  // 이메일
  const [email, setEmail] = useState<string>('');
  // 비밀번호
  const [pw, setPw] = useState<string>('');
  // 비밀번호 확인
  const [pwChk, setPwChk] = useState<string>('');
  // 닉네임
  const [nickname, setNickname] = useState<string>('');

  // View Model의 함수
  const { signUp } = useSignUpViewModel();

  // 페이지 이동을 위한 hook
  const navigate = useNavigate();

  // 로그인 페이지로 이동할 함수
  const moveBack = () => {
    navigate('/');
  };

  // 회원가입
  const handleSignUp = async (event: React.FormEvent<HTMLFormElement>) => {
    // 새로고침 방지
    event.preventDefault();

    // 회원가입
    const response = await signUp(email, pw, nickname);

    // 성공시 로그인 페이지로 이동
    if (response?.statusCode === 200) {
      alert('가입 완료');
      navigate('/');
    }
  };

  return (
    <SignUpPage
      email={email}
      pw={pw}
      pwChk={pwChk}
      nickname={nickname}
      setEmail={setEmail}
      setPw={setPw}
      setPwChk={setPwChk}
      setNickname={setNickname}
      moveBack={moveBack}
      handleSignUp={handleSignUp}
    />
  );
};

export default SignUpContainer;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import SignUpPage from '../pages/SignUpPage';
import useSignUpViewModel from '../viewmodels/SignUpViewModel';

const SignUpContainer = () => {
  // 이메일
  const [email, setEmail] = useState<string>('');
  // 비밀번호
  const [password, setPassword] = useState<string>('');
  // 비밀번호 확인
  const [passwordCheck, setPasswordCheck] = useState<string>('');
  // 닉네임
  const [nickname, setNickname] = useState<string>('');

  // View Model의 함수
  const { signUp } = useSignUpViewModel();

  // 페이지 이동을 위한 hook
  const navigate = useNavigate();

  // 회원가입
  const handleSignUp = async (event: React.FormEvent<HTMLFormElement>) => {
    // 새로고침 방지
    event.preventDefault();

    // 회원가입
    const response = await signUp(email, password, nickname);

    // 성공시 로그인 페이지로 이동
    if (response?.statusCode === 200) {
      alert('가입 완료');
      navigate('/');
    }
  };

  return (
    <SignUpPage
      email={email}
      password={password}
      passwordCheck={passwordCheck}
      nickname={nickname}
      setEmail={setEmail}
      setPassword={setPassword}
      setPasswordCheck={setPasswordCheck}
      setNickname={setNickname}
      navigate={navigate}
      handleSignUp={handleSignUp}
    />
  );
};

export default SignUpContainer;

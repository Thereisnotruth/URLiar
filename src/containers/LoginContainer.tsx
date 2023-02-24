import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import LoginPage from '../pages/LoginPage';
import useAuthViewModel from '../viewmodels/AuthViewModel';

const LoginContainer = () => {
  // 이메일
  const [email, setEmail] = useState<string>('');
  // 비밀번호
  const [password, setPassword] = useState<string>('');

  // 뷰 모델의 함수
  const { login } = useAuthViewModel();

  // 페이지 이동을 위한 hook
  const navigate = useNavigate();

  // 로그인
  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    // 새로고침 방지
    event.preventDefault();
    const response = await login(email, password);
    if (response?.statusCode === 200) {
      navigate('/lobby');
    }
  };

  return (
    <LoginPage
      navigate={navigate}
      handleLogin={handleLogin}
      setEmail={setEmail}
      setPassword={setPassword}
    />
  );
};

export default LoginContainer;

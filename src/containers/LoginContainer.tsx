import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import LoginPage from '../pages/LoginPage';

const LoginContainer = () => {
  // 이메일
  const [email, setEmail] = useState<string>();
  // 비밀번호
  const [password, setPassword] = useState<string>();

  // 페이지 이동을 위한 hook
  const navigate = useNavigate();

  // 로그인
  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    // 새로고침 방지
    event.preventDefault();
  };

  return <LoginPage navigate={navigate} handleLogin={handleLogin} />;
};

export default LoginContainer;

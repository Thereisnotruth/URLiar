import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUpPage = () => {
  const [email, setEmail] = useState<string>('');
  const [pw, setPw] = useState<string>('');
  const [pwChk, setPwChk] = useState<string>('');
  const [nickname, setNickname] = useState<string>('');

  const navigate = useNavigate();

  return (
    <div>
      <button type="button" role="moveBack" onClick={() => navigate('/')}>
        뒤로가기
      </button>
      <input
        type="text"
        placeholder="email"
        onChange={({ target: { value } }) => setEmail(value)}
      />
      <input
        type="password"
        placeholder="password"
        onChange={({ target: { value } }) => setPw(value)}
      />
      <input
        type="password"
        placeholder="password check"
        onChange={({ target: { value } }) => setPwChk(value)}
      />
      {pw === pwChk ? null : '비밀번호가 일치하지 않습니다.'}
      <input
        type="text"
        placeholder="nickname"
        onChange={({ target: { value } }) => setNickname(value)}
      />
      <button
        type="button"
        disabled={!email || !pw || !pwChk || !nickname || pw !== pwChk}
      >
        회원가입
      </button>
    </div>
  );
};

export default SignUpPage;

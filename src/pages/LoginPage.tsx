import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button type="button" onClick={() => navigate('/register')}>
        회원가입
      </button>
    </div>
  );
};

export default LoginPage;

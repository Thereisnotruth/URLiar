import React from 'react';
import { useNavigate } from 'react-router-dom';

const SignUpPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button type="button" role="moveBack" onClick={() => navigate('/')}>
        뒤로가기
      </button>
    </div>
  );
};

export default SignUpPage;

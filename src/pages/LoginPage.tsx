import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-urliar-4 h-100 flex items-center">
      {/* 로그인 페이지 */}
      <div className="bg-urliar-1 flex w-[500px] h-[520px] mx-auto rounded-[10px]">
        {/* 로그인 창 */}

        <button
          type="button"
          className="bg-urliar-3 mx-auto"
          onClick={() => navigate('/register')}
        >
          회원가입
        </button>
      </div>
    </div>
  );
};

export default LoginPage;

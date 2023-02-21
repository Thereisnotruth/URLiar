import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as Logo } from '../assets/images/liar.svg';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-urliar-4 h-100 flex items-center">
      {/* 로그인 페이지 */}
      <div className="bg-urliar-1 w-[500px] h-[520px] mx-auto rounded-[10px]">
        {/* 로그인 창 */}
        <div className="text-urliar-3 fill-urliar-3 stroke-urliar-3">
          <Logo className="w-[100%]" />
        </div>
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

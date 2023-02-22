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
        <div className="fill-urliar-2 h-[85px]">
          <Logo className="w-[100%]" />
        </div>
        <div className="bg-urliar-3 w-[400px] h-[380px] mx-auto rounded-[10px] p-[20px]">
          <input
            type="text"
            className="w-[330px] h-[40px] rounded-[10px] my-[10px] px-[10px]"
            placeholder="이메일"
          />
          <input
            type="password"
            className="w-[330px] h-[40px] rounded-[10px] my-[10px] px-[10px]"
            placeholder="비밀번호"
          />
          <button
            type="button"
            className="bg-urliar-2 w-[330px] h-[50px] rounded-[10px] text-[20px] text-[#ffffff] my-[10px]"
          >
            로그인
          </button>
          <button
            type="button"
            className="bg-urliar-2 w-[330px] h-[50px] rounded-[10px] text-[20px] text-[#ffffff] my-[10px]"
            onClick={() => navigate('/register')}
          >
            회원가입
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

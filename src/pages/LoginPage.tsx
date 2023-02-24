import React from 'react';

import { ReactComponent as Logo } from '../assets/images/liar.svg';

const LoginPage: React.FC<any> = ({
  navigate,
  handleLogin,
  setEmail,
  setPassword,
}) => {
  return (
    <div className="bg-urliar-4 h-100 flex items-center">
      {/* 로그인 창 */}
      <div className="bg-urliar-1 w-[500px] mx-auto rounded-[10px] p-[20px]">
        {/* 로고 */}
        <div className="fill-urliar-2 h-[85px]">
          <Logo className="w-[100%]" />
        </div>
        {/* 로그인 폼 */}
        <form
          className="bg-urliar-3 w-[400px] mx-auto rounded-[10px] p-[20px]"
          onSubmit={handleLogin}
        >
          {/* 이메일 입력 창 */}
          <input
            type="text"
            className="w-[330px] h-[40px] rounded-[10px] my-[10px] px-[10px]"
            placeholder="email"
            onChange={({ target: { value } }) => setEmail(value)}
          />
          {/* 비밀번호 입력 창 */}
          <input
            type="password"
            className="w-[330px] h-[40px] rounded-[10px] my-[10px] px-[10px]"
            placeholder="password"
            onChange={({ target: { value } }) => setPassword(value)}
          />
          {/* 로그인 버튼 */}
          <button
            type="submit"
            className="bg-urliar-2 w-[330px] h-[50px] rounded-[10px] text-[20px] text-[#ffffff] my-[10px]"
          >
            로그인
          </button>
          {/* 회원가입 버튼 */}
          <button
            type="button"
            className="bg-urliar-2 w-[330px] h-[50px] rounded-[10px] text-[20px] text-[#ffffff] my-[10px]"
            onClick={() => navigate('/signup')}
          >
            회원가입
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;

import React, { useReducer, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';

import { ReactComponent as Logo } from '../assets/images/liar.svg';

const SignUpPage = ({
  email,
  pw,
  pwChk,
  nickname,
  setEmail,
  setPw,
  setPwChk,
  setNickname,
  moveBack,
  handleSignUp,
}: any) => {
  return (
    <div className="bg-urliar-4 h-100 flex items-center">
      {/* 회원가입 창 */}
      <div className="bg-urliar-1 w-[500px] mx-auto rounded-[10px] relative p-[20px]">
        {/* 뒤로가기 버튼 */}
        <button
          type="button"
          role="moveBack"
          className="absolute w-[36px] h-[36px] rounded-[50%] bg-urliar-3 text-[#ffffff] text-[28px] flex justify-center items-center"
          onClick={moveBack}
        >
          <AiOutlineArrowLeft />
        </button>
        {/* 로고 */}
        <div className="fill-urliar-2 h-[85px]">
          <Logo className="w-[100%]" />
        </div>
        {/* 회원가입 폼 */}
        <form
          className="bg-urliar-3 w-[400px] mx-auto rounded-[10px] p-[20px]"
          onSubmit={handleSignUp}
        >
          {/* 이메일 입력 창 */}
          <input
            type="text"
            placeholder="email"
            className="w-[330px] h-[40px] rounded-[10px] px-[10px] text-[16px] my-[10px]"
            onChange={({ target: { value } }) => setEmail(value)}
          />
          {/* 비밀번호 입력 창 */}
          <input
            type="password"
            placeholder="password"
            className="w-[330px] h-[40px] rounded-[10px] px-[10px] text-[16px] my-[10px]"
            onChange={({ target: { value } }) => setPw(value)}
          />
          {/* 비밀번호 확인 입력 창 */}
          <input
            type="password"
            placeholder="verify password"
            className="w-[330px] h-[40px] rounded-[10px] px-[10px] text-[16px] my-[10px]"
            onChange={({ target: { value } }) => setPwChk(value)}
          />
          {/* 입력한 비밀번호가 서로 다르면 메시지를 띄움 */}
          {pw === pwChk ? null : (
            <div className="text-[#ffffff]">비밀번호가 일치하지 않습니다.</div>
          )}
          {/* 닉네임 입력 창 */}
          <input
            type="text"
            placeholder="nickname"
            className="w-[330px] h-[40px] rounded-[10px] px-[10px] text-[16px] my-[10px]"
            onChange={({ target: { value } }) => setNickname(value)}
          />
          {/* 회원가입 버튼 */}
          <button
            type="submit"
            className="bg-urliar-2 text-[20px] text-[#ffffff] w-[330px] h-[50px] rounded-[10px] my-[10px]"
            disabled={!email || !pw || !pwChk || !nickname || pw !== pwChk}
          >
            회원가입
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;

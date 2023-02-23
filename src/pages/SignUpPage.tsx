import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { ReactComponent as Logo } from '../assets/images/liar.svg';

const SignUpPage = () => {
  const [email, setEmail] = useState<string>('');
  const [pw, setPw] = useState<string>('');
  const [pwChk, setPwChk] = useState<string>('');
  const [nickname, setNickname] = useState<string>('');

  const navigate = useNavigate();

  return (
    <div className="bg-urliar-4 h-100 flex items-center">
      <div className="bg-urliar-1 w-[500px] mx-auto rounded-[10px] relative p-[20px]">
        <button
          type="button"
          role="moveBack"
          className="absolute w-[48px] h-[48px] rounded-[50%] bg-urliar-3 m-[5px] text-[#ffffff] text-[36px] flex justify-center items-center"
          onClick={() => navigate('/')}
        >
          <AiOutlineArrowLeft />
        </button>
        <div className="fill-urliar-2 h-[85px]">
          <Logo className="w-[100%]" />
        </div>

        <form className="bg-urliar-3 w-[400px] mx-auto rounded-[10px] p-[20px]">
          <input
            type="text"
            placeholder="email"
            className="w-[330px] h-[40px] rounded-[10px] px-[10px] text-[16px] my-[10px]"
            onChange={({ target: { value } }) => setEmail(value)}
          />
          <input
            type="password"
            placeholder="password"
            className="w-[330px] h-[40px] rounded-[10px] px-[10px] text-[16px] my-[10px]"
            onChange={({ target: { value } }) => setPw(value)}
          />
          <input
            type="password"
            placeholder="verify password"
            className="w-[330px] h-[40px] rounded-[10px] px-[10px] text-[16px] my-[10px]"
            onChange={({ target: { value } }) => setPwChk(value)}
          />
          {pw === pwChk ? null : (
            <div className="text-[#ffffff]">비밀번호가 일치하지 않습니다.</div>
          )}
          <input
            type="text"
            placeholder="nickname"
            className="w-[330px] h-[40px] rounded-[10px] px-[10px] text-[16px] my-[10px]"
            onChange={({ target: { value } }) => setNickname(value)}
          />
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

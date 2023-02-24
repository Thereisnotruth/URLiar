import { useSetRecoilState } from 'recoil';

import userInfoState from '../models/userInfoState';
import { doLogin, doSignUp, doUpdateProfile } from '../apis/AuthApi';

const AuthViewModel = () => {
  const setUserInfo = useSetRecoilState(userInfoState);

  const signUp = async (email: string, password: string, nickname: string) => {
    const signUpResponse = await doSignUp(email, password);

    if (signUpResponse?.statusCode === 200 && signUpResponse.data) {
      const updateProfileResponse = await doUpdateProfile(
        signUpResponse.data?.user,
        {
          displayName: nickname,
        }
      );
      return updateProfileResponse;
    }
  };

  const login = async (email: string, password: string) => {
    const loginResponse = await doLogin(email, password);
    if (
      loginResponse?.statusCode === 200 &&
      loginResponse.data &&
      loginResponse.data.user.displayName &&
      loginResponse.data.user.email
    ) {
      setUserInfo({
        uid: loginResponse.data.user.uid,
        email: loginResponse.data.user.email,
        nickname: loginResponse.data.user.displayName,
      });
      return loginResponse;
    }
  };

  return {
    signUp,
    login,
  };
};

export default AuthViewModel;

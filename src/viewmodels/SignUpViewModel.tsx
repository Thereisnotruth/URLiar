import { useSetRecoilState } from 'recoil';

import userInfoState from '../models/userInfoState';
import { doSignUp, doUpdateProfile } from '../apis/AuthApi';

const SignUpViewModel = () => {
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

  return {
    signUp,
  };
};

export default SignUpViewModel;

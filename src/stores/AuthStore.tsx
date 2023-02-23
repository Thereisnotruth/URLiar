import axios from 'axios';
import { useRecoilState } from 'recoil';

import userInfoState from '../states/userInfoState';

const AuthStore = () => {
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
};

export default AuthStore;

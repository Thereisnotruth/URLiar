import { atom } from 'recoil';

import { UserInfoTypes } from '../types/AuthType';

const userInfoState = atom<UserInfoTypes>({
  key: 'userInfo',
  default: {
    uid: '',
    email: '',
    nickname: '',
  },
});

export default userInfoState;

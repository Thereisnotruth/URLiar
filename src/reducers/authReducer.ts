import { atom, useSetRecoilState } from 'recoil';

const authReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'SIGN_UP':
      console.log('signup');
      break;
    default:
      return state;
  }
};

export default authReducer;

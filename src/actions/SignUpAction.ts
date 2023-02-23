import {
  firebaseAuth,
  createUserWithEmailAndPassword,
} from '../utils/firebase';

export const doSignUp = async (
  email: string,
  password: string,
  nickname: string
) => {
  try {
    const createUser = await createUserWithEmailAndPassword(
      firebaseAuth,
      email,
      password
    );
    console.log(createUser);
  } catch (err: any) {
    switch (err.code) {
      case 'auth/weak-password':
        alert('비밀번호는 6자리 이상이어야 합니다.');
        break;
    }
  }
};

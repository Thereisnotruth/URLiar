import {
  createUserWithEmailAndPassword,
  updateProfile,
  User,
} from 'firebase/auth';

import { firebaseAuth } from '../utils/firebase';

export const doSignUp = async (email: string, password: string) => {
  try {
    const response = await createUserWithEmailAndPassword(
      firebaseAuth,
      email,
      password
    );
    return {
      statusCode: 200,
      message: 'SUCCESS',
      data: response,
    };
  } catch (err: any) {
    switch (err.code) {
      case 'auth/weak-password':
        return {
          statusCode: 400,
          message: 'WEAK_PASSWORD',
        };
      case 'auth/invalid-email':
        return {
          statusCode: 400,
          message: 'INVALID_EMAIL',
        };
      case 'auth/email-already-in-use':
        return {
          statusCode: 409,
          message: 'EMAIL_ALREADY_IN_USE',
        };
    }
  }
};

export const doUpdateProfile = async (user: User, profile: any) => {
  try {
    await updateProfile(user, profile);

    return {
      statusCode: 200,
      message: 'SUCCESS',
    };
  } catch (err: any) {
    console.log(err);
  }
};

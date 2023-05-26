import LoginData from './LoginData';

type RegisterData = {
  login: string;
  passwordRepeat: string;
} & LoginData;
export default RegisterData;

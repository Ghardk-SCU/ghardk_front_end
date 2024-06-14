const APIURL = import.meta.env.VITE_API_URL;

const SignupUrl = () => (`${APIURL}api/v1/users/signup`);
const LoginUrl = () => (`${APIURL}api/v1/users/login`);
const MyDataUrl = () => (`${APIURL}api/v1/users/getMe`);

export {
  SignupUrl,
  LoginUrl,
  MyDataUrl,
}
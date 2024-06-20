const APIURL = import.meta.env.VITE_API_URL;

const SignupUrl = () => (`${APIURL}api/v1/users/signup`);
const LoginUrl = () => (`${APIURL}api/v1/users/login`);
const MyDataUrl = () => (`${APIURL}api/v1/users/getMe`);
const VerifyOTP = () => (`${APIURL}api/v1/users/verify`);
const ForgetPassword = () => (`${APIURL}api/v1/users/forget-password`);
const ResetPassword = () => (`${APIURL}api/v1/users/reset-password`);
const AskForVerificationCode = () => (`${APIURL}api/v1/users/verify-token`);

export {
  SignupUrl,
  LoginUrl,
  MyDataUrl,
  VerifyOTP,
  ForgetPassword,
  ResetPassword,
  AskForVerificationCode
}
const APIURL = import.meta.env.VITE_API_URL;

const SignupUrl = () => (`${APIURL}api/v1/users/signup`);
const LoginUrl = () => (`${APIURL}api/v1/users/login`);
const MyDataUrl = () => (`${APIURL}api/v1/users/getMe`);
const VerifyOTP = () => (`${APIURL}api/v1/users/verify`);
const ForgetPassword = () => (`${APIURL}api/v1/users/forget-password`);
const ResetPassword = () => (`${APIURL}api/v1/users/reset-password`);
const AskForVerificationCode = () => (`${APIURL}api/v1/users/verify-token`);
const getCart = () => (`${APIURL}api/v1/carts`);
const deleteFromCart = (id) => (`${APIURL}api/v1/carts/${id}`);
const updateFromCart = (id) => (`${APIURL}api/v1/carts/${id}`);
const getCountries = () => (`${APIURL}api/v1/countries/`);
const getMyDefaultAddress = () => (`${APIURL}api/v1/addresses/defaultAddress`);
const addNewAddress = () => (`${APIURL}api/v1/addresses/`);
const updateAddress = (id) => (`${APIURL}api/v1/addresses/${id}`);
const Checkout = () => (`${APIURL}api/v1/sales/checkout`);
const popularProdcuts = () => (`${APIURL}api/v1/products/popular`);
export {
  SignupUrl,
  LoginUrl,
  MyDataUrl,
  VerifyOTP,
  ForgetPassword,
  ResetPassword,
  AskForVerificationCode,
  getCart,
  deleteFromCart,
  updateFromCart,
  getCountries,
  getMyDefaultAddress,
  addNewAddress,
  updateAddress,
  Checkout,
  popularProdcuts
}
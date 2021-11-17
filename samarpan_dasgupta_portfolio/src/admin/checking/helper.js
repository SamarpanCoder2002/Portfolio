const isAdminAuthenticated = () => {
  return true;
  //   if (window && localStorage.getItem(process.env.COOKIE_IDENTIFIER)) {
  //     return JSON.parse(localStorage.getItem(process.env.COOKIE_IDENTIFIER));
  //   } else {
  //     return false;
  //   }
};

export default isAdminAuthenticated;

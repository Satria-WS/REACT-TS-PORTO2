const result = (name: any, email: any) => {
  const nameReg = /^[a-zA-Z0-9_-]+$/;
  const emailReg = /^[^\s@]+@[^s\@]+\.[^\s@]+$/;

  return {
    nameReg: nameReg.test(name),
    emailReg: emailReg.test(email),
  };
};

const validationData = (name: any, email: any) => {
  const { nameReg, emailReg } = result(name, email);
  return [nameReg, emailReg];
};

export { validationData };

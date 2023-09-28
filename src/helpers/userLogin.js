const userLogin = async (email, password) => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  };
  await fetch('http://localhost:8080/api/auth/login/', requestOptions)
    .then((response) => response.json())
    .then((data) => {
      if (data.user) {
        localStorage.setItem('name', data.user.name);
        localStorage.setItem('email', data.user.email);
        localStorage.setItem('x-token', data.token);
        localStorage.setItem('auth', true);
        console.log(data);
      } else {
        localStorage.setItem('name', '');
        localStorage.setItem('email', '');
        localStorage.setItem('x-token', '');
        localStorage.setItem('auth', false);
      }
    });
};

export { userLogin };

const userLogin = async (email, password) => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  };
  await fetch('http://localhost:8080/api/auth/login/', requestOptions)
    .then((response) => response.json())
    .then((data) => console.log(data));
};

export { userLogin };

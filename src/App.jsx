import './App.css';
import PrivateRoute from './components/routes/PrivateRoute';
import Home from './pages/Home';

// pages
import Login from './pages/Login';
import SignUp from './pages/SignUp';

import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<PrivateRoute />}>
        <Route exact path="/" element={<Home />}></Route>
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
}

export default App;

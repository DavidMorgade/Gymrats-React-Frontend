import './App.css';
import PrivateRoute from './components/routes/PrivateRoute';
import { UserWrapper } from './context/Users/useUserContext';
import Home from './pages/Home';

// pages
import Login from './pages/Login';
import SignUp from './pages/SignUp';

import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <UserWrapper>
      <Routes>
        <Route exact path="/" element={<PrivateRoute />}>
          <Route exact path="/" element={<Home />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </UserWrapper>
  );
}

export default App;

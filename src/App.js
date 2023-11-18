import HomePage from './components/homePage/homepage';
import Login from './components/login/login';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  const isLogin = sessionStorage.getItem('email') ? true : false;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

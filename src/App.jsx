
import { Routes, Route, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './transitions.css'; // Impor untuk efek transisi
import SignIn from './pages/signin';
import SignUp from './pages/signup';
import Homepage from './pages/homepage';
import ForgotPw from './pages/forgotPw';
import Profile from './pages/profile';
import Product from './pages/product';

const App = () => {
  const location = useLocation(); // Dapatkan lokasi saat ini

  return (
    <TransitionGroup>
      <CSSTransition
        key={location.key} // Gunakan key untuk mengidentifikasi komponen yang sedang ditampilkan
        classNames="fade" // Kelas untuk transisi
        timeout={300} // Durasi transisi
      >
        <Routes location={location}>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/products" element={<Product />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/forgotpassword" element={<ForgotPw />} />  
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default App;

import './App.css';

import Login from './Pages/Login'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate
} from "react-router-dom";
import { app } from './Auth/Firebase/firebase-config';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'

function Root() {

  let navigate = useNavigate();

  const handleAction = (id) => {
    console.log(id)
    const authentication = getAuth();
    createUserWithEmailAndPassword(authentication, 'auth-example-id4@examplemai.com', '1234567')
    .then((response) => {
      console.log(response);
      navigate('/home')
      sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken);
    })
  }

  handleAction(1);
  return (
    <div className="App">
      <>
      <Routes>
        <Route path='/login' element={<Login title="Login" />} />
        <Route path='/home' element={<Login title="Home" />} />
      </Routes>
      </>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Root />
    </Router>
  );
}

export default App;

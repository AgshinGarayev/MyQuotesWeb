import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext';
//Pages & Components
import Home from './pages/Home'
import Post from './pages/Post';
import Recents from './pages/Recents';
import NavBar from './components/NavBar'
import Footer from './components/Footer';
import Login from './pages/Login';
import Register from './pages/Register';
import QuoteDetail from './pages/QuoteDetail';

function App() {
  const {user} = useAuthContext()
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
      <div className='pages'>
        <Routes>
          <Route path='/'
          element={<Home />}
          />
          <Route path='/post'
          element={user? <Post /> : <Navigate to='/login' />}
          />
          <Route path='/recents'
          element={user? <Recents />: <Navigate to='/login' />   }
          />
          <Route path='/login'
          element={!user ? <Login />: <Navigate to='/' />}
          />
          <Route path='/register'
          element={!user ? <Register /> : <Navigate to='/' />  } 
          />
          <Route path='/quote/:id'
          element={ <QuoteDetail /> } 
          />


        </Routes>
      </div>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

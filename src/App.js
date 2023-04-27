import logo from './logo.svg';
import './App.css';
import Main from './screens/main';
import AuthProvider from './contexts/AuthContext';
import { BrowserRouter, Router, Route, Routes, Switch, Navigate } from 'react-router-dom';
import RequireAuth from './PrivateRoute/RequireAuth';
import Vote from './screens/Vote';

function App() {
   return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path='/Vote' element={
              <RequireAuth>
                <Vote/>
              </RequireAuth>
          }/>
          <Route exact path="/" element={<Main/>}/>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;

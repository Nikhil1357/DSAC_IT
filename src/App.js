import logo from './logo.svg';
import './App.css';
import Main from './screens/main';
import AuthProvider from './contexts/AuthContext';
import { BrowserRouter, Router, Route, Routes, Switch, Navigate } from 'react-router-dom';
// import Dashboard from './screens/Vote';
import Extra from './screens/Extra';
// import Main from './screens/main';
import Login from './screens/Login';
import PrivateRoute from './screens/PrivateRoute';
// import { useAuth } from './contexts/AuthContext';
import RequireAuth from './screens/RequireAuth';
import Vote from './screens/Vote';


function App() {
   return (
    // <div className="App">
    <BrowserRouter>
      <AuthProvider>
      {/* <Main/> */}
        <Routes>
          {/* <PrivateRoute/> */}
          <Route path='/Vote' element={
              <RequireAuth>
                <Vote/>
              </RequireAuth>
          }/>
          <Route exact path="/login" element={<Main/>}/>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
    // </div>
  );
}

export default App;

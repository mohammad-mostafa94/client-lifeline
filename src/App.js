import './App.css';
import HomePage from './Pages/HomePage/HomePage';
import {
  BrowserRouter as Router, Route, Routes
} from "react-router-dom";
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import Footer from './Pages/Shared/Footer/Footer';
import Navigation from './Pages/Shared/Nevigatioin/Navigation';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register/Register';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Appointment from './Pages/Appointment/Appointment';
import Dashboard from "./Pages/HomePage/Dashboard/Dashboard/Dashboard";
import DashboardHome from "./Pages/HomePage/Dashboard/DashboardHome/DashboardHome";
import AdminRoute from './Pages/Login/AdminRoute/AdminRoute';
import Payment from './Pages/HomePage/Dashboard/Payment/Payment';
import MakeAdmin from './Pages/HomePage/Dashboard/Dashboard/MakeAdmin/MakeAdmin';
import AddDoctor from './Pages/HomePage/Dashboard/Dashboard/AddDoctor/AddDoctor';
import AddStaff from './Pages/HomePage/Dashboard/AddStaff/AddStaff';

function App() {
  return (
    <div className="">
      <AuthProvider>
        <Router>
          <Navigation />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route path="/appointment" element={<PrivateRoute><Appointment /></PrivateRoute>} />

            <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>}>
              <Route exact path="/dashboard" element={<DashboardHome></DashboardHome>}></Route>
              <Route path={`/dashboard/payment/:appointmentId`} element={<Payment></Payment>}>

              </Route>
              <Route path={`/dashboard/makeAdmin`} element={<AdminRoute><MakeAdmin></MakeAdmin>
              </AdminRoute>}>
              </Route>
              <Route path={`/dashboard/addDoctor`} element={<AdminRoute>
                <AddDoctor></AddDoctor>
              </AdminRoute>}>
              </Route>
              <Route path={`/dashboard/addStaff`} element={<AdminRoute>
                <AddStaff></AddStaff>
              </AdminRoute>}>
              </Route>
            </Route>

          </Routes>
          <Footer />

        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;

import "./App.css";
import Navbar from "./Pages/Shared/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Appointment from "./Pages/Appointment/Appointment";
import LogIn from "./Pages/LogIn/LogIn";
import SignUp from "./Pages/LogIn/SignUp";
import RequireAuth from "./Pages/LogIn/RequireAuth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Deshbord from "./Pages/Deshbord/Deshbord";
import MyAppointments from "./Pages/Deshbord/MyAppointments";
import MyReview from "./Pages/Deshbord/MyReview";
import AllUsers from "./Pages/Deshbord/AllUsers";
import History from "./Pages/Deshbord/History";
import RequireAdmin from "./Pages/LogIn/RequireAdmin";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route
          path="appointment"
          element={
            <RequireAuth>
              <Appointment />
            </RequireAuth>
          }
        />
        <Route
          path="deshbord"
          element={
            <RequireAuth> <Deshbord /> </RequireAuth>
          }
        >
          <Route index element={<MyAppointments></MyAppointments>}></Route>
          <Route path="review" element={<MyReview></MyReview>}></Route>
          <Route path="history" element={<History></History>}></Route>
          <Route path="users" element={<RequireAdmin><AllUsers></AllUsers></RequireAdmin>}></Route>
        </Route>
        <Route path="login" element={<LogIn></LogIn>} />
        <Route path="signup" element={<SignUp></SignUp>} />
      </Routes>

      <ToastContainer />
    </div>
  );
}

export default App;
